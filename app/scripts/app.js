'use strict';

/**
 * @ngdoc overview
 * @name billetterieProjectApp
 * @description
 * # billetterieProjectApp
 *
 * Main module of the application.
 */
angular
  .module('billetterieProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
    .when('/fucking', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
