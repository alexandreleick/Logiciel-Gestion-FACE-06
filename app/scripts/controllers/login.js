'use strict';

Parse.initialize("lgface06");
Parse.serverURL = 'https://logiciel-gestion-face-06.herokuapp.com/parse'; 
angular.module('billetterieProjectApp')
    .controller('LoginCtrl', ['$scope','$location', function($scope, $location) {
        $scope.username = "";
        $scope.password = "";
        $scope.logIn = function() {
            if ($scope.username && $scope.password) {
                Parse.User.logIn($scope.username, $scope.password, {
                    success: function(user) {
                        console.log(user);
                        location.href = '/#!/events';
                        iziToast.success({
                            title: "Connexion réussi",
                            position: 'center', 
                            message: "Bonjour " + user.get('firstname')
                        });
                        //swal("Connexion réussi", "Bonjour " + user.get('firstname'), "success");
                        // Do stuff after successful login.
                    },
                    error: function(user, error) {
                        //alert(error.message);
                        // The login failed. Check error to see why.
                        iziToast.error({
                            title: "Attention",
                            position: 'center', 
                            message: "Mot de passe ou identifiant incorrect !"
                        });
                    }
                });
            } else {
                iziToast.warning({
                    title: "Attention",
                    position: 'center', 
                    message: "Merci de remplir les informations au dessus !"
                });
                //swal("Attention", "Merci de remplir les informations au dessus !", "warning");

            }
        }
    }]);