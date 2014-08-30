/// <reference path="../lib.d.ts" />


import ctrl1 = require('./main/main-controller');
import ctrl2 = require('./studio/studio-controller');

var _module = window.angular.module('Booktrack.Mandrill', [
    'ngRoute'
]);

resourceRequire("script!../bower_components/angular/angular")
resourceRequire("script!../bower_components/angular-route/angular-route")
// controllers for router
ctrl1.register(_module);
ctrl2.register(_module);

// TODO see if https://www.npmjs.org/package/ngtemplate-loader is useful for templates

_module.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/',
        {
            controller: 'MainController',
            template: resourceRequire('raw!./main/main-controller.html')
        })
        .when('/studio',
        {
            template: resourceRequire('raw!./studio/studio-controller.html'),
            controller: 'StudioController'
        });

}]);



