'user strict';

angular.module('billetterieProjectApp')
    .controller('UsersCtrl', ['$scope','$location','APIManager', function($scope, $location, APIManager) {

        $scope.users = [];
        $scope.user = Parse.User.current();
        $scope.loadingEvent = true;
        APIManager.getUsers().then( function(users) {
            $scope.users = users;
            console.log($scope.users);
            //$scope.loadingEvent = false;
        });
        
        $scope.deleteUser = function(index) {
            APIManager.deleteUser($scope.users[index]).then(function() {
                
            });
        }
    }]);