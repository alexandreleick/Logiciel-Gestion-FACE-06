'user strict';

angular.module('billetterieProjectApp')
    .controller('CreateUserCtrl', ['$scope','$location', '$routeParams','APIManager', function($scope, $location, $routeParams, APIManager) {
        $scope.info = "Créer un utilisateur";
        $scope.saveInfo = "Créer"
        $scope.user = [];
        $scope.poles = ['Presidence', 'Communication', 'Evenementiel', 'AgoraE', 'Representation', 'Reseau', 'Prevention', 'Run Radio', 'Informatique'];

        if ($routeParams.id) {
            $scope.user = Parse.User.current();
            $scope.info = "Modifier mes informations";
            $scope.saveInfo = "Modifier";
            $scope.user.firstname = Parse.User.current().get("firstname");
            $scope.user.name = Parse.User.current().get("name");
            $scope.user.email = Parse.User.current().get("email");
            $scope.user.password = Parse.User.current().get("password");
            console.log($scope.user.password);
            $scope.user.sector = Parse.User.current().get("sector");
            $scope.user.phone = Parse.User.current().get("phone");
            $scope.user.profilPicture = Parse.User.current().get("profilPicture");
            console.log("JE SUIS ICI");
            console.log($scope.user);
        }
        $scope.save = function() {
            if (!$routeParams.id) {
                var newUser = new Parse.User();
                newUser.set('name', $scope.user.name);
                newUser.set('firstname', $scope.user.firstname);
                newUser.set('username', $scope.user.email);
                newUser.set('password', $scope.user.password);
                newUser.set('sector', $scope.user.sector);
                newUser.set('phone', $scope.user.phone);
                newUser.set('email', $scope.user.email);
                newUser.set('profilPicture', $scope.user.profilPicture);
                newUser.save(null, {
                    success: function(user) {
                        // Execute any logic that should take place after the object is saved.
                        swal("Succès", user.get('name') + " " + user.get('firstname') + " a été créer.", "success");
                        $scope.$apply(function() {
                            $location.path('/users'); 
                        });
                    },
                    error: function(error) {
                        // Execute any logic that should take place if the save fails.
                        // error is a Parse.Error with an error code and message.
                        alert('Failed to create new object, with error code: ' + error.message);
                    }
                });
            } else {
                Parse.User.current().set("name", $scope.user.name);
                Parse.User.current().set("firstname", $scope.user.firstname);
                Parse.User.current().set("email", $scope.user.email);
                Parse.User.current().set("phone", $scope.user.phone);
                Parse.User.current().set("sector", $scope.user.sector);
                Parse.User.current().set("username", $scope.user.email);
                if ($scope.user.password != undefined)
                    Parse.User.current().set("password", $scope.user.password);
                Parse.User.current().set("profilPicture", $scope.user.profilPicture);
                Parse.User.current().save(null, {
                    success: function(user) {
                        // Execute any logic that should take place after the object is saved.
                        swal("Succès", user.get('name') + " " + user.get('firstname') + " a été modifié.", "success");
                        $scope.$apply(function() {
                            $location.path('/users'); 
                        });
                    },
                    error: function(error) {
                        // Execute any logic that should take place if the save fails.
                        // error is a Parse.Error with an error code and message.
                        alert('Failed to create new object, with error code: ' + error.message);
                    }
                });
            }
        }

        // if ($('#inputCover')[0] !== undefined) {
        //     $('#inputCover')[0].onchange = function() {
        //         $scope.$apply(function() {
        //             $scope.isImage = true;
        //             // $scope.loadingCoverPhoto = true;
        //         });
        //         var fileUploadControl = $('#inputCover')[0];
        //         if (fileUploadControl.files.length > 0) {
        //             var file = fileUploadControl.files[0];
        //             var name = 'coverPhoto.jpg';
        //             var parseFile = new Parse.File(name, file);
        //             console.log(parseFile);
        //             //console.log($scope.event);
        //             $scope.user.profilPicture = parseFile;
        //             var tmppath = URL.createObjectURL(this.files[0]);
        //             $("#imgs").fadeIn("fast").attr('src',URL.createObjectURL(this.files[0]));
        //             $("#disp_tmp_path").html("Temporary Path(Copy it and try pasting it in browser address bar) --> <strong>["+tmppath+"]</strong>");
        //             //$scope.loadingCoverPhoto = false;                    
        //             $scope.user.profilPicture = parseFile;
        //         }
        //     };
        // }

        if ($('#inputCover')[0] !== undefined) {
            $('#inputCover')[0].onchange = function() {
                $scope.$apply(function() {
                    $scope.isImage = true;
                    $scope.loadingCoverPhoto = true;
                });
                var fileUploadControl = $('#inputCover')[0];
                if (fileUploadControl.files.length > 0) {
                    var file = fileUploadControl.files[0];
                    var name = 'coverPhoto.jpg';
                    var parseFile = new Parse.File(name, file);
                    console.log(parseFile);
                    //console.log($scope.event);
                    $scope.user.profilPicture = parseFile;
                    var tmppath = URL.createObjectURL(this.files[0]);
                    $("#imgs").fadeIn("fast").attr('src',URL.createObjectURL(this.files[0]));
                    $("#disp_tmp_path").html("Temporary Path(Copy it and try pasting it in browser address bar) --> <strong>["+tmppath+"]</strong>");
                    $scope.loadingCoverPhoto = false;                    
                    $scope.event.coverPhoto = parseFile;
                }
            };
        }
    }]);