'use strict';

/**
 * @ngdoc service
 * @name perchMltrainerApp.PerchImage
 * @description
 * # PerchImage
 * Service in the perchMltrainerApp.
 */
angular.module('perchMltrainerApp')
  .service('PerchImage', function ($resource, API, $http) {
    this.uploadImage = function(file, vision_model_id, class_id){
      var uploadUrl = API.baseUrl + '/images';
      var fd = new FormData();
      fd.append('file', file);
      fd.append('vision_model_id', vision_model_id);
      fd.append('class_id', class_id);
      $http.post(uploadUrl, fd, {
          transformRequest: angular.identity,
          headers: {'Content-Type': undefined}
        })
        .success(function(){
        })
        .error(function(){
        });
    }
    //this.getImagesForProject = function()
  });
