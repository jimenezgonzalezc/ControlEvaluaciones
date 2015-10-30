'use strict';

/**
 * @ngdoc overview
 * @name controlDeEvaluacionesApp
 * @description
 * # controlDeEvaluacionesApp
 *
 * Main module of the application.
 */
 angular
 .module('controlDeEvaluacionesApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.sortable'
  ])
 .config(function ($routeProvider) {
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
  .otherwise({
    redirectTo: '/'
  });
});
