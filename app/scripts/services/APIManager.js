'use strict';

/**
 * @ngdoc service
 * @name staffBookerBoApp.updateNotif
 * @description
 * # APIManager
 * Service in the staffBookerBoApp.
 */
angular.module('billetterieProjectApp')
    .service('APIManager', function ($q) {

    var clients = [];
    var jobs = [];
    var users = [];
    var allUsers = [];
    var events = [];
    var eventDatas = [];

    // Get all the users who have joined the current Agency
    this.getUsers = function() {
        var defer = $q.defer();
        if (users == undefined) {
            users = [];
        }
        console.log('USERS: ');
        console.log(users);
        if (users.length > 0) {
            defer.resolve(users);
        }
        var query = new Parse.Query('User');
        query.ascending('lastName');
        //query.equalTo('status', Constants.AgencyActionStatus.Joined);
        query.limit(1000);
        query.find({
            success: function(results) {
                defer.resolve(results);
            },
            error: function(error) {
                defer.reject(error);
            }
        });
        return defer.promise;
    };

    this.getEvents = function () {
        var defer = $q.defer();
        if (events == undefined) {
            events = [];
        }
        if (events.length > 0) {
            console.log("from cache");
            defer.resolve(events);
        }
        var query = new Parse.Query('events');
        query.find({
            success: function (events) {
                //            this.events = events;
                defer.resolve(events);
            },
            error: function (error) {
                console.warn(error);
                defer.reject();
            }
        });
        return defer.promise;
    };

    this.getEvent = function(id) {
        var defer = $q.defer();
        var query = new Parse.Query('events');
        query.equalTo('name', id);
        query.first({
            success: function(event) {
                defer.resolve(event);
            },
            error: function(error) {
                console.warn(error);
                defer.reject(error);
            }
        });
        return defer.promise;
    };


    this.saveEvent = function(event) {
        var defer = $q.defer();
        console.log(event.get('status'));
        event.save(null, {
            success: function() {
                defer.resolve();
            },
            error: function(error) {
                console.log(error);
                defer.reject(error);
            }
        });
        return defer.promise;
    };

    // Delete event and delete all linked missions related to this event
    this.deleteEvent = function(event) {
        var defer = $q.defer();
        event.destroy({
            success: function() {
                defer.resolve();
            },
            error: function(error) {
                defer.reject(error);
            }
        });
        return defer.promise;
    };

});
