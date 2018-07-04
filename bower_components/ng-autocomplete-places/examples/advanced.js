angular.module( "Test", ['ngPlacesAutocomplete'])
  .controller("TestCtrl",function ($scope) {  
    var vm = this;

    vm.result = ''
//    vm.details = ''
    vm.options = {};
    vm.initialAddress = null;

    vm.form = {
      type: 'geocode',
      bounds: {SWLat: 49, SWLng: -97, NELat: 50, NELng: -96},
      country: 'nz',
      typesEnabled: false,
      boundsEnabled: false,
      componentEnabled: false,
      watchEnter: true,
      initialLatLng: false,
      initialAddress: {lat: 40.7128 , lng: 74.0059}
    }

    //watch form for changes
    vm.watchForm = function () {
      return vm.form
    };
    $scope.$watch(vm.watchForm, function () {
      vm.checkForm()
    }, true);


    //set options from form selections
    vm.checkForm = function() {

      vm.options = {};

      vm.options.watchEnter = vm.form.watchEnter

      if (vm.form.typesEnabled) {
        vm.options.types = vm.form.type
      }
      if (vm.form.boundsEnabled) {

        var SW = new google.maps.LatLng(vm.form.bounds.SWLat, vm.form.bounds.SWLng)
        var NE = new google.maps.LatLng(vm.form.bounds.NELat, vm.form.bounds.NELng)
        var bounds = new google.maps.LatLngBounds(SW, NE);
        vm.options.bounds = bounds

      }
      if (vm.form.componentEnabled) {
        vm.options.country = vm.form.country
      }
    };

    vm.initialAddressChange = function (){
      if(vm.form.initialLatLng){
        vm.initialAddress = vm.form.initialAddress;
      }
      else{
        vm.initialAddress = null;
      }
    }

  });

