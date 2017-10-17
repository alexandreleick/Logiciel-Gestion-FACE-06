'user strict';

angular.module('billetterieProjectApp')
    .controller('EventCtrl', ['$scope','$location', '$routeParams', 'APIManager', function($scope, $location, $routeParams, APIManager) {

        $scope.event = [];
        APIManager.getEvent($routeParams.id).then(function(event) {
            $scope.event = event;
            console.log(event);
        })
    }]);