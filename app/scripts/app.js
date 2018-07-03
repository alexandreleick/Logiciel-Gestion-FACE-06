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
    .when('/modify/user/:id', {
        templateUrl: 'views/createUser.html',
        controller: 'CreateUserCtrl',
        controllerAs: 'event'
      })
    .when('/modify/event/:id', {
        templateUrl: 'views/createEvent.html',
        controller: 'CreateEventCtrl',
        controllerAs: 'event'
      })
    .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'event'
      })
    .when('/billetterie/event/:id', {
        templateUrl: 'views/eventBilletterie.html',
        controller: 'EventCtrl',
        controllerAs: 'event'
      })
    .when('/billetterie/subscribe/:id', {
        templateUrl: 'views/subscribeUser.html',
        controller: 'SubscribeUser',
        controllerAs: 'event'
      })
      .otherwise({
        redirectTo: '/events'
      });
  })
    .run(function($rootScope, $location) {
    
    $rootScope.$on('$routeChangeStart', function(event, next) {
        console.log(next.$$route.templateUrl)
        if (next.$$route.templateUrl != "views/eventBilletterie.html" && next.$$route.templateUrl != "views/subscribeUser.html")
        if (Parse.User.current() === null || Parse.User.current().get('name') === null) {
            $location.path('/');
        }
        //      $rootScope.pageTitle = next.$$route.title;
    });
});
