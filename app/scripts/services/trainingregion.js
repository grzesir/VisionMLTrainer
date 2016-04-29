'use strict';

/**
 * @ngdoc service
 * @name perchMltrainerApp.TrainingRegion
 * @description
 * # TrainingRegion
 * Service in the perchMltrainerApp.
 */
angular.module('perchMltrainerApp')
  .service('TrainingRegion', function ($resource, API) {
    return $resource(API.baseUrl + '/training_regions/:id', { id:'@_id' },
      {
      });
  });
