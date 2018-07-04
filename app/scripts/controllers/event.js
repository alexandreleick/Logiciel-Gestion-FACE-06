'user strict';

angular.module('billetterieProjectApp')
    .controller('EventCtrl', ['$scope','$location', '$routeParams', 'APIManager', function($scope, $location, $routeParams, APIManager) {

        $scope.event = [];
        $scope.peoplesRegister = [];
        $scope.numberOfTicket = 0
        
        var calendar = ["", "Jan.", "Fev.", "Mar.", "Avr.", "Mai", "Juin", "Juil.", "Aou.", "Sep.", "Oct.", "Nov.", "Dec."];
        $scope.filiere = {'DROIT': 0 , 'ISEM': 0 , 'IAE': 0 , 'POLE SANTE':0 , 'STAPS':0 , 'POLYTECH':0 , 'MIAGE':0 , 'IUT':0 , 'SCIENCES': 0  , 'ECOLES PRIVÉES': 0  , 'LASH':0 , 'ESPE':0 , 'BTS':0, 'Autre':0 };
        APIManager.getEvent($routeParams.id).then(function(event) {
          
            $scope.event = event;
            console.log(event);
            APIManager.getPeoplesRegister($scope.event).then(function(peoplesRegister) {
                $scope.peoplesRegister = peoplesRegister;
                console.log(peoplesRegister);
                console.log($scope.peoplesRegister.length);
                console.log($scope.filiere["DROIT"]);
                var i = 0;
                                while (i < $scope.peoplesRegister.length) {
                                    console.log("CA RENTRE");
                                    $scope.filiere[peoplesRegister[i].get('filiere')] += 1;
                                    i++;
                                }
            });
            $scope.minDay = $scope.event.get('dateStart').substring(0, 2);
            $scope.minMonth = calendar[parseInt($scope.event.get('dateStart').substring(3, 5))];
            $scope.minYear = $scope.event.get('dateStart').substring(6, 10);
            $scope.maxDay = $scope.event.get('dateEnd').substring(0, 2);
            $scope.maxMonth = calendar[parseInt($scope.event.get('dateEnd').substring(3, 5))];
            $scope.maxYear = $scope.event.get('dateEnd').substring(6, 10);
            console.log($scope.minMonth);
            console.log($scope.minDay);
        });
        
setTimeout(function(){
  
    	var chart = new CanvasJS.Chart("chartContainer",
	{
		theme: "theme2",
		data: [
		{       
			type: "pie",
			showInLegend: true,
			toolTipContent: "{y} - #percent %",
			legendText: "{indexLabel}",
			dataPoints: [
				{  y: $scope.filiere.DROIT, indexLabel: "Droit" },
				{  y: $scope.filiere.ISEM, indexLabel: "ISEM" },
				{  y: $scope.filiere.IAE, indexLabel: "IAE" },
				{  y: $scope.filiere["POLE SANTE"], indexLabel: "Pole Santé"},
				{  y: $scope.filiere.POLYTECH, indexLabel: "Polytech" },
                {  y: $scope.filiere.MIAGE, indexLabel: "MIAGE" },
                {  y: $scope.filiere.IUT, indexLabel: "IUT" },
                {  y: $scope.filiere.SCIENCES, indexLabel: "Sciences" },
                {  y: $scope.filiere["ECOLES PRIVÉES"], indexLabel: "Ecoles Privées" },
                {  y: $scope.filiere.LASH, indexLabel: "LASH" },
                {  y: $scope.filiere.ESPE, indexLabel: "ESPE" },
                {  y: $scope.filiere.BTS, indexLabel: "BTS" },
                {  y: $scope.filiere.Autre, indexLabel: "Autre" },
                {  y: $scope.filiere.STAPS, indexLabel: "STAPS" }
                
			]
		}
		]
	});
	chart.render();
        }, 3000);
    }]);

