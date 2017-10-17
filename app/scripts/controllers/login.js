'use strict';

Parse.initialize("lgface06");
Parse.serverURL = 'https://logiciel-gestion-face-06.herokuapp.com/parse'; 
angular.module('billetterieProjectApp')
    .controller('LoginCtrl', ['$scope','$location', function($scope, $location) {

    $scope.username = "";
    $scope.password = "";
    $scope.logIn = function() {
    Parse.User.logIn($scope.username, $scope.password, {
        success: function(user) {
            console.log(user);
            location.href = '/#!/test/' ;
            // Do stuff after successful login.
        },
        error: function(user, error) {
            alert(error.message);
            // The login failed. Check error to see why.
        }
    });
    }
}]);