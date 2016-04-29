'use strict';

/**
 * @ngdoc function
 * @name perchMltrainerApp.controller:ImageeditorCtrl
 * @description
 * # ImageeditorCtrl
 * Controller of the perchMltrainerApp
 */
angular.module('perchMltrainerApp')
  .controller('ImageeditorCtrl', function ($scope, VisionModel, Image) {
    $scope.visionModels = VisionModel.query();

    $scope.selectedProject = undefined;

    $scope.selectVisionModel = function(selectedVisionModel) {
      $scope.imageList = Image.query({vision_model_id: selectedVisionModel.pk});
    };

    $scope.setImageClass = function(image, imageClass) {
      image.image_class = imageClass;
      // strange bug, rest of image object wont get sent without this
      image.pk = image.pk;
      image = image.$save();
    }

    $scope.setIsTestImage = function(image, isTestImage) {
      image.is_test_image = isTestImage;
      // strange bug, rest of image object wont get sent without this
      image.pk = image.pk;
      image = image.$save();
    }

    $scope.imageListFilter = function(classToShow, isTestImage) {
      return function(image) {
        //console.log(image);
        //console.log(image.fields.is_test_image)
        //console.log(isTestImage)
        if(image.fields.image_class == classToShow && image.fields.is_test_image == isTestImage) {
          //console.log("returning true");
          return true;
        }
        else {
          //console.log("returning false");
          return false
        }
      }
    }

    $scope.defaultImagesClicked = function(isDefaultImage) {
      console.log('isDefaultImage', isDefaultImage);
      if(isDefaultImage == true) {
        $scope.imageList = Image.query({is_default_image: true});
      }
    }

    $scope.isFlaggedIncorrectClicked = function(selectedVisionModel, isFlaggedIncorrect) {
      console.log('isFlaggedIncorrect', isFlaggedIncorrect);
      $scope.imageList = Image.query({vision_model_id: selectedVisionModel.pk, is_flagged_incorrect: isFlaggedIncorrect});
    }
  });
