'use strict';

/**
 * @ngdoc function
 * @name perchMltrainerApp.controller:TrainCtrl
 * @description
 * # TrainCtrl
 * Controller of the perchMltrainerApp
 */
angular.module('perchMltrainerApp')
  .controller('TrainCtrl', function ($scope, TrainingRegion, Project, PerchImage, PerchImageEval) {
    var _stream = null;
    var _timer = setInterval(processImagesInterval, 400);
    var _videoScale = 4;

    $scope.isCapturingImages = false;
    $scope.isEvaluatingImages = false;
    $scope.projects = Project.query();
    $scope.trainingRegions = [];
    $scope.evalResult = PerchImageEval.evalResult;
    $scope.lastThreshold = 0;
    $scope.trainingThreshold = 0.5;

    $scope.selectProject = function(selectedProject) {
      $scope.trainingRegions = TrainingRegion.query({project_id: selectedProject.pk});
    };

    $scope.startImageCapture = function() {
      $scope.isCapturingImages = true;
    };
    $scope.stopImageCapture = function() {
      $scope.isCapturingImages = false;
    };

    $scope.startImageEval = function() {
      $scope.isEvaluatingImages = true;
    };
    $scope.stopImageEval = function() {
      $scope.isEvaluatingImages = false;
    };

    $scope.myChannel = {
      // the fields below are all optional
      videoHeight: 1200/_videoScale,
      videoWidth: 900/_videoScale,
      video: null // Will reference the video element on success
    };

    function processImageInTrainingRegion(trainingRegion) {
      var canvas = $('canvas')[0];
      canvas.width = trainingRegion.fields.width;
      canvas.height = trainingRegion.fields.height;
      canvas.getContext('2d').drawImage($('video')[0], trainingRegion.fields.x, trainingRegion.fields.y, trainingRegion.fields.width*_videoScale, trainingRegion.fields.height*_videoScale, 0, 0, trainingRegion.fields.width, trainingRegion.fields.height);
      var dataURL = canvas.toDataURL("image/jpeg");

      if($scope.isCapturingImages) {
        PerchImage.uploadImage(dataURL, trainingRegion.fields.vision_model, trainingRegion.selectedClass);
      }
      if($scope.isEvaluatingImages) {
        PerchImageEval.uploadImage(dataURL);
        $scope.evalResult = PerchImageEval.evalResult;
        if(PerchImageEval.evalResult != undefined && PerchImageEval.evalResult.predicted_class != undefined) {
          for(var i = 0; i < $scope.evalResult.predicted_class.length; i++) {
            if($scope.evalResult.predicted_class[i] > $scope.trainingThreshold) {
              $scope.lastThreshold = i;
            }
          }
        }
      }
    };
    $scope.onError = function (err) {
      console.log("onError");
    };
    $scope.onStream = function (stream) {
      console.log(stream);
      _stream = stream;
    };
    $scope.onSuccess = function () {
      console.log("onSuccess");
    };

    /////////////////////
    // Private Functions

    function processImagesInterval() {
      for(var i = 0; i < $scope.trainingRegions.length; i++) {
        var trainingRegion = $scope.trainingRegions[i];
        processImageInTrainingRegion(trainingRegion);
      }
    }
  });
