'user strict';

angular.module('billetterieProjectApp')
    .controller('EventCtrl', ['$scope','$location', '$routeParams', 'APIManager', function($scope, $location, $routeParams, APIManager) {

        $scope.event = [];
        $scope.peoplesRegister = [];

        APIManager.getEvent($routeParams.id).then(function(event) {
            $scope.event = event;
            console.log(event);
            APIManager.getPeoplesRegister($scope.event).then(function(peoplesRegister) {
                $scope.peoplesRegister = peoplesRegister;
                console.log(peoplesRegister);
            });
        });


    }]);