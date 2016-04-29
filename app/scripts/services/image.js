'use strict';

/**
 * @ngdoc service
 * @name perchMltrainerApp.Image
 * @description
 * # Image
 * Service in the perchMltrainerApp.
 */
angular.module('perchMltrainerApp')
  .service('Image', function ($resource, API) {
    return $resource(API.baseUrl + '/images/:id', { id:'@_id' },
      {
      });
  });
