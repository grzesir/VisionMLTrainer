'use strict';

/**
 * @ngdoc overview
 * @name perchMltrainerApp
 * @description
 * # perchMltrainerApp
 *
 * Main module of the application.
 */
angular
  .module('perchMltrainerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'webcam',
    'angularUtils.directives.dirPagination'
  ])
  .config(function ($routeProvider, $sceDelegateProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/train', {
        templateUrl: 'views/train.html',
        controller: 'TrainCtrl',
        controllerAs: 'train'
      })
      .when('/imageEditor', {
        templateUrl: 'views/imageeditor.html',
        controller: 'ImageeditorCtrl',
        controllerAs: 'imageEditor'
      })
      .otherwise({
        redirectTo: '/'
      });

    $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://localhost:3000', 'http://localhost:8000']);
    //$httpProvider.defaults.headers.common.accept = 'application/json';
  });
