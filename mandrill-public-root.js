define(['script!./bower_components/angular/angular',
        'script!./bower_components/angular-route/angular-route',
        'require'
    ],
    function (angScr, angRouteScr, require) {


        var _module = angular.module('Booktrack.Mandrill', [
            'ngRoute'
        ]);

        // controllers for router
        require('./src/main/main-controller').register(_module);
        require('./src/studio/studio-controller').register(_module);

        // TODO see if https://www.npmjs.org/package/ngtemplate-loader is useful for templates

        _module.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/',
                {
                    controller: 'MainController',
                    template: require('raw!./src/main/main-controller.html')
                })
                .when('/studio',
                {
                    template: require('raw!./src/studio/studio-controller.html'),
                    controller: 'StudioController'
                });

        }]);



    });
