'use strict';

(function() {
    var app = angular.module('app', ['ngRoute', 'ngGrid', 'restangular']);
    
    app.config(['$routeProvider', 
        function($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'app/trips/partials/editor.html',
                    controller:  'TripsController'
                });
        }
    ]);
}) ();
