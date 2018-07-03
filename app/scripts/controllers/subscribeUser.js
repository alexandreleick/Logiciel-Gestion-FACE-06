'user strict';
Parse.initialize("lgface06");
Parse.serverURL = 'https://logiciel-gestion-face-06.herokuapp.com/parse';
angular.module('billetterieProjectApp')
    .controller('SubscribeUser', ['$scope','$location','APIManager','$routeParams','BilletService', function($scope, $location, APIManager, $routeParams, BilletService) {

        $scope.user = [];
        $scope.event = [];
        $scope.campus = ['Valrose' , 'Pasteur' , 'Carlone' , 'Staps' , 'Trotabas' , "Saint Jean d'Angely" , 'Menton' , 'Fabron' , 'Sophia Antipolis' , 'Nice Etoile' , 'Autre'];
        $scope.filiere = ['DROIT' , 'ISEM' , 'IAE' , 'POLE SANTE' , 'STAPS' , 'POLYTECH' , 'MIAGE' , 'IUT' , 'SCIENCES' , 'ECOLES PRIVÉES' , 'LASH' , 'ESPE' , 'BTS', 'Autre' ];
        console.log($scope.campus[0]);
        APIManager.getEvent($routeParams.id).then(function(event) {
            $scope.event = event;
            //console.log($scope.event);

        })
        $scope.save = function() {
            if ($scope.user.name && $scope.user.firstname && $scope.user.carteNumber && $scope.user.phone && $scope.user.mail && $scope.user.filiere && $scope.user.campus) {
                var NewUser = Parse.Object.extend("eventUsers");
                var newUser = new NewUser();
                newUser.set('name', $scope.user.name);
                newUser.set('firstname', $scope.user.firstname);
                newUser.set('carteNumber', $scope.user.carteNumber);
                newUser.set('phone', $scope.user.phone);
                newUser.set('mail', $scope.user.mail);
                if (!$scope.user.otherFiliere)
                    newUser.set('filiere', $scope.user.filiere);
                else
                    newUser.set('filiere', $scope.user.otherFiliere);
                if (!$scope.user.otherCampus)
                    newUser.set('campus', $scope.user.campus);
                else
                    newUser.set('campus', $scope.user.otherCampus);

                newUser.set('year', "2017");
                newUser.set('event', $scope.event);
                newUser.save();
                BilletService.createBillet($scope.event, $scope.user);
                swal("Félicitation", "Vous êtes officiellement inscrit à l'événement : " + $scope.event.get('name') + ". \nN'oubliez pas votre billet et votre carte étudiante.", "success");

            } else {
                swal("Attention", "Merci de remplir toutes les informations nécessaires à l'inscription !", "warning");
            }
            //console.log($scope.event);
        }
    }]);