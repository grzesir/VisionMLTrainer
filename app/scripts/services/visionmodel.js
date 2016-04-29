'use strict';

/**
 * @ngdoc service
 * @name perchMltrainerApp.VisionModel
 * @description
 * # VisionModel
 * Service in the perchMltrainerApp.
 */
angular.module('perchMltrainerApp')
  .service('VisionModel', function ($resource, API) {
    return $resource(API.baseUrl + '/vision_models/:id', { id:'@_id' },
      {
      });
  });
