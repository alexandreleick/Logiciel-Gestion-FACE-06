'user strict';
Parse.initialize("lgface06");
Parse.serverURL = 'https://logiciel-gestion-face-06.herokuapp.com/parse'; 
angular.module('billetterieProjectApp')
    .controller('SubscribeUser', ['$scope','$location','APIManager','$routeParams', function($scope, $location, APIManager, $routeParams) {

        $scope.user = [];
        $scope.event = [];
        APIManager.getEvent($routeParams.id).then(function(event) {
            $scope.event = event;
            console.log(event);
        })
        $scope.save = function() {
            var NewUser = Parse.Object.extend("eventUsers");
            var newUser = new NewUser();
            newUser.set('name', $scope.user.name);
            newUser.set('firstname', $scope.user.firstname);
            newUser.set('carteNumber', $scope.user.carteNumber);
            newUser.set('phone', $scope.user.phone);
            newUser.set('mail', $scope.user.mail);
            newUser.set('filiere', $scope.user.filiere);
            newUser.set('campus', $scope.user.campus);
            newUser.set('year', "2017");
            newUser.set('event', $scope.event);
            newUser.save();
            //console.log($scope.event);
        }
    }]);