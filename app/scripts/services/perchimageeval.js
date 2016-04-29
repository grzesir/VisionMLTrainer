'use strict';

/**
 * @ngdoc service
 * @name perchMltrainerApp.PerchImageEval
 * @description
 * # PerchImageEval
 * Service in the perchMltrainerApp.
 */
angular.module('perchMltrainerApp')
  .service('PerchImageEval', function ($resource, API, $http) {
    var that = this;
    this.evalResult = undefined;
    this.uploadImage = function(file){
      var uploadUrl = API.baseUrl + '/evaluate';
      var fd = new FormData();
      fd.append('file', file);
      $http.post(uploadUrl, fd, {
          transformRequest: angular.identity,
          headers: {'Content-Type': undefined}
        })
        .success(function(data){
          that.evalResult = data;
        })
        .error(function(){
        });
    }
  });
