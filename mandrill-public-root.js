define(['script!./bower_components/angular/angular',
        'script!./bower_components/angular-route/angular-route'
    ],
    function () {

        var _module = angular.module('Booktrack.Mandrill', [
            'ngRoute'
        ]);

        _module.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/',
                {
                    controller: 'RootController',
                    template: '<div>ROOT CONTENT</div>'
                })
                .when('/studio',
                {
                    template: '<div>STUDIO CONTENT</div>',
                    controller: 'StudioController'
                });

        }]);

        _module.controller('RootController', function () {
            console.log("Root controller loaded");

        });

        _module.controller('StudioController', function () {
            console.log("Studio controller loaded");
        });

    });
