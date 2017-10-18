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
    .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl',
        controllerAs: 'events'
      })
    .when('/create/event', {
        templateUrl: 'views/createEvent.html',
        controller: 'CreateEventCtrl',
        controllerAs: 'event'
      })
    .when('/event/:id', {
        templateUrl: 'views/event.html',
        controller: 'EventCtrl',
        controllerAs: 'event'
      })
    .when('/create/user', {
        templateUrl: 'views/createUser.html',
        controller: 'CreateUserCtrl',
        controllerAs: 'event'
      })
      .otherwise({
        redirectTo: '/events'
      });
  })
    .run(function($rootScope, $location) {
    
    $rootScope.$on('$routeChangeStart', function(event, next) {
        if (Parse.User.current() === null || Parse.User.current().get('name') === null) {
            $location.path('/');
        }
        //      $rootScope.pageTitle = next.$$route.title;
    });
});
