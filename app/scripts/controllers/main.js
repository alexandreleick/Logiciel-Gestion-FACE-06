'use strict';

/**
 * @ngdoc function
 * @name billetterieProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the billetterieProjectApp
 */
Parse.initialize("lgface06");
Parse.serverURL = 'https://logiciel-gestion-face-06.herokuapp.com/parse'; 
angular.module('billetterieProjectApp')
    .controller('MainCtrl', function () {
    this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
    var GameScore = Parse.Object.extend("users");
    var gameScore = new GameScore();

    gameScore.set("name", "Leick");
    gameScore.set("firstname", "Alexandre");

    gameScore.save(null, {
        success: function(gameScore) {
            // Execute any logic that should take place after the object is saved.
            alert('New object created with objectId: ' + gameScore.id);
        },
        error: function(gameScore, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            alert('Failed to create new object, with error code: ' + error.message);
        }
    });
});
