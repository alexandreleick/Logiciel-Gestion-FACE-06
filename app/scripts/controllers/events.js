'user strict';

angular.module('billetterieProjectApp')
    .controller('EventsCtrl', ['$scope','$location','APIManager', function($scope, $location, APIManager) {

        $scope.events = [];
        $scope.user = Parse.User.current();
        $scope.loadingEvent = true;
        $scope.numberOfParticipants = 0;
        APIManager.getEvents().then( function(events) {
            $scope.events = events;
            console.log($scope.events);
            $scope.loadingEvent = false;
            for (var i = 0; i < $scope.events.length; i++) {
                if ($scope.events[i].get('sector') == user.get('sector') || user.get('sector') == "Presidence")
                    $scope.events[i].set('isModified', false);
                else
                    $scope.events[i].set('isModified', true);
                    console.log($scope.events[i].get('isModified'));
            }
        });
        console.log("ici");
        $scope.pass = false;
        var user = Parse.User.current();
        if (user.get('sector') === "Presidence" || user.get('sector') === "Informatique")
            $scope.pass = true;
        console.log(user.get('sector'));
        console.log($scope.pass);

        $scope.deleteEvent = function(index) {
            APIManager.deleteEvent($scope.events[index]).then(function() {
                $scope.events.splice(index, 1);
            });
        }

//        $scope.getNumberOfParticipants = function(event) {
//            APIManager.getPeoplesRegister(event).then(function(peoplesRegister) {
//                $scope.numberOfParticipants = peoplesRegister.length;
//            });
//           // return $scope.numberOfParticipants;
//        }
        $scope.logOut = function() {
            swal("Voulez vous vous déconnecter ?", {
                buttons: {
                    cancel: "Non",
                    catch: {
                        text: "Oui",
                        dangerMode: true,
                        value: "catch",
                    },
                },
            })
                .then((value) => {
                switch (value) {
                    case "catch":
                        $scope.$apply(function() {
                            $location.path('/');
                            Parse.User.logOut();
                        });
                        break;
                }
            });
        };
  
    }]);