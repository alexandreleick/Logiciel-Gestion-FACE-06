'user strict';

angular.module('billetterieProjectApp')
    .controller('EventsCtrl', ['$scope','$location','APIManager', function($scope, $location, APIManager) {

        $scope.events = [];
        $scope.user = Parse.User.current();
        $scope.loadingEvent = true;
        APIManager.getEvents().then( function(events) {
            $scope.events = events;
            console.log($scope.events);
            $scope.loadingEvent = false;
        });
        console.log("ici");
        $scope.pass = false;
        var user = Parse.User.current();
        if (user.get('sector') === "Presidence" || user.get('sector') === "Informatique")
            $scope.pass = true;
        console.log(user.get('sector'));
        console.log($scope.pass);
    }]);