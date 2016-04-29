'use strict';

/**
 * @ngdoc service
 * @name perchMltrainerApp.Project
 * @description
 * # Project
 * Service in the perchMltrainerApp.
 */
angular.module('perchMltrainerApp')
  .service('Project', function ($resource, API) {
    return $resource(API.baseUrl + '/projects/:id', { id:'@_id' },
      {
      });
  });
