'user strict';

Parse.initialize("lgface06");
Parse.serverURL = 'https://logiciel-gestion-face-06.herokuapp.com/parse';
angular.module('billetterieProjectApp')
    .controller('TicketUser', ['$scope','$location','APIManager','$routeParams','BilletService', function($scope, $location, APIManager, $routeParams, BilletService) {
      $scope.user = [];
      $scope.event = new Parse.Object("events");
      var calendar = ["", "Jan.", "Fev.", "Mar.", "Avr.", "Mai", "Juin", "Juil.", "Aou.", "Sep.", "Oct.", "Nov.", "Dec."];

      if ($routeParams.id) {
          console.log('Existe');
          APIManager.getEventUser($routeParams.id).then(function(user) {
              $scope.user = user;
              console.log($scope.user[0]);
              $scope.event = $scope.user[0].get("event");
              console.log($scope.event.get("localisation"));
              initMap($scope.event.get("localisation"));
              $scope.minDay = $scope.event.get('dateStart').substring(0, 2);
              $scope.minMonth = calendar[parseInt($scope.event.get('dateStart').substring(3, 5))];
              $scope.minYear = $scope.event.get('dateStart').substring(6, 10);
              $scope.maxDay = $scope.event.get('dateEnd').substring(0, 2);
              $scope.maxMonth = calendar[parseInt($scope.event.get('dateEnd').substring(3, 5))];
              $scope.maxYear = $scope.event.get('dateEnd').substring(6, 10);
              console.log($scope.minMonth);
              console.log($scope.minDay);
          })
        }




    function initMap(address) {
      console.log(address);

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        mapTypeControl: false,
        zoomControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        center: {lat: -34.397, lng: 150.644}
      });
      var geocoder = new google.maps.Geocoder();
      codeAddress(geocoder, map, address);
    }

    function codeAddress(geocoder, map, address) {
      geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
          map.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
          });
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
        //testPDF();
      });
    }
    $scope.testPDF = function() {
      var opts = {
        //scale: scale,
        //canvas: canvas,
        logging: true,
        useCORS: true,
        allowTaint: false
    };
      html2canvas(document.getElementById('Div_1'), opts).then(canvas => {
        console.log("Je crée le PDF");
          data_1 = canvas.toDataURL();
          var docDefinition = {
               content: [{
                       image: data_1,
                       width: 500,
                   }]
           };
           var namePDF = "Billet " + $scope.event.get("name") + " : " + $scope.user[0].get("name") + " - " + $scope.user[0].get("firstname") + ".pdf";
           pdfMake.createPdf(docDefinition).download(namePDF);
      });
      }
    }]);
