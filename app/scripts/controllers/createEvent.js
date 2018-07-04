'user strict';

angular.module('billetterieProjectApp')
    .controller('CreateEventCtrl', ['$scope','$location','$routeParams','APIManager', function($scope, $location, $routeParams, APIManager) {
        $scope.event = [];
        $scope.user = Parse.User.current();
        $scope.title = "Créer";
        if ($routeParams.id) {
            console.log('Existe');
            APIManager.getEvent($routeParams.id).then(function(event) {
                console.log(event);
                $scope.event.name = event.get('name');
                $scope.event.dateStart = event.get('dateStart');
                $scope.event.dateEnd = event.get('dateEnd');
                $scope.event.hourStart = event.get('hourStart');
                $scope.event.hourEnd = event.get('hourEnd');
                $scope.event.desc = event.get('description');
                $scope.event.localisation = event.get('localisation');
                $scope.event.coverPhoto = event.get('coverPhoto');
                $scope.event.id = event.id;
                $scope.title = "Modifier";
            });
            
        }
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
                    $scope.event.coverPhoto = parseFile;
                    var tmppath = URL.createObjectURL(this.files[0]);
                    $("#imgs").fadeIn("fast").attr('src',URL.createObjectURL(this.files[0]));
                    $("#disp_tmp_path").html("Temporary Path(Copy it and try pasting it in browser address bar) --> <strong>["+tmppath+"]</strong>");
                    $scope.loadingCoverPhoto = false;                    
                    $scope.event.coverPhoto = parseFile;
                }
            };
        }

        initializeAutocomplete('user_input_autocomplete_address');
        

        function initializeAutocomplete(id) {
            var element = document.getElementById(id);
            if (element) {
              var autocomplete = new google.maps.places.Autocomplete(element, { types: ['geocode'] });
              google.maps.event.addListener(autocomplete, 'place_changed', onPlaceChanged);
            }
          }
          function onPlaceChanged() {
            var place = this.getPlace();
          
            console.log(place);  // Uncomment this line to view the full object returned by Google API.
          
            for (var i in place.address_components) {
              var component = place.address_components[i];
              for (var j in component.types) {  // Some types are ["country", "political"]
                var type_element = document.getElementById(component.types[j]);
                if (type_element) {
                  type_element.value = component.long_name;
                }
              }
            }
            $scope.event.localisation = place.formatted_address;
            console.log("SCOPE " + $scope.event.localisation);
          }
        $scope.save = function() {
            var NewEvent = Parse.Object.extend("events");
            var newEvent = new NewEvent();
            if ($scope.event.id)
                newEvent.set('objectId', $scope.event.id);
            newEvent.set('name', $scope.event.name);
            newEvent.set('dateStart', $scope.event.dateStart);
            newEvent.set('dateEnd', $scope.event.dateEnd);
            newEvent.set('hourStart', $scope.event.hourStart);
            newEvent.set('hourEnd', $scope.event.hourEnd);
            newEvent.set('description', $scope.event.desc);
            newEvent.set('localisation', $scope.event.localisation);
            newEvent.set('sector', $scope.user.get('sector'));
            newEvent.set('link', "#!/billetterie/subscribe/" + $scope.event.name);
            if ($scope.event.coverPhoto)
                newEvent.set('coverPhoto', $scope.event.coverPhoto)
            newEvent.save(null, {
                success: function(event) {
                    swal($scope.event.name, "L'événement a été " + $scope.title.toLowerCase() + " avec succès !", "success");
                    $scope.$apply(function() {
                    $location.path("/event/" + $scope.event.name);
                        
                    });
                    console.log($scope.event);
                }
            });

        }
    }]);