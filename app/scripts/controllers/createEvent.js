'user strict';

angular.module('billetterieProjectApp')
    .controller('CreateEventCtrl', ['$scope','$location', function($scope, $location) {
        $scope.event = [];
        $scope.user = Parse.User.current();
       
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

        $scope.save = function() {
            var NewEvent = Parse.Object.extend("events");
            var newEvent = new NewEvent();
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
            newEvent.save();
            console.log($scope.event);
        }
    }]);