'use strict';

/**
 * @ngdoc function
 * @name perchMltrainerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the perchMltrainerApp
 */
angular.module('perchMltrainerApp')
  .controller('MainCtrl', function ($scope, PerchImageEval) {

    $scope.uploadFile = function(){
      var file = $scope.myFile;
      console.log('file is ' );
      console.dir(file);
      //var uploadUrl = "http://localhost:8000/PerchImages/evaluate";
      //fileUpload.uploadFileToUrl(file, uploadUrl);
      PerchImageEval.uploadImage(file);
      $scope.evalResult = PerchImageEval.evalResult;
    };

    $scope.setFile = function(element) {
      $scope.currentFile = element.files[0];
      var reader = new FileReader();

      reader.onload = function(event) {
        $scope.image_source = event.target.result
        $scope.$apply()

      };
      // when the file is read it triggers the onload event above.
      reader.readAsDataURL(element.files[0]);
    }
  });
