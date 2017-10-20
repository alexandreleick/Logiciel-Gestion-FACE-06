'use strict';

angular.module('billetterieProjectApp')
    .controller('HeaderController', function ($scope, $location) {

    $scope.messagesNumber = "";

    $scope.user = Parse.User.current();
    $scope.firstName = $scope.user.get('firstName');
    $scope.lastName = $scope.user.get('lastName');
    console.log( $scope.lastName);
    $(function() {
        $('.ui.dropdown').dropdown();
    });
    $scope.logout = function() {
        AgencyService.logOut().then( function() {
            $location.path('/');
        });
    };
});