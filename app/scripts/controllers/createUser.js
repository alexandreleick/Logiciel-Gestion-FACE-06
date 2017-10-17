'user strict';

angular.module('billetterieProjectApp')
    .controller('CreateUserCtrl', ['$scope','$location', function($scope, $location) {

        $scope.user = [];

        $scope.save = function() {
            var newUser = new Parse.User();
            newUser.set('name', $scope.user.name);
            newUser.set('firstname', $scope.user.firstname);
            newUser.set('username', $scope.user.email);
            newUser.set('password', $scope.user.password);
            newUser.set('sector', $scope.user.sector);
            newUser.set('phone', $scope.user.phone);
            newUser.set('email', $scope.user.email);
            newUser.save(null, {
                success: function(user) {
                    // Execute any logic that should take place after the object is saved.
                    alert('New object created with objectId: ' + user.id);
                },
                error: function(error) {
                    // Execute any logic that should take place if the save fails.
                    // error is a Parse.Error with an error code and message.
                    alert('Failed to create new object, with error code: ' + error.message);
                }
            });
        }
    }]);