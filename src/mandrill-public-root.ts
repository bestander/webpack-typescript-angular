/// <reference path="../lib.d.ts" />

import ctrl1 = require('./main/main-controller');
import ctrl2 = require('./studio/studio-controller');

require("script!../bower_components/angular/angular");
require("script!../bower_components/angular-route/angular-route");

var _module = window.angular.module('Booktrack.Mandrill', [
    'ngRoute'
]);

// controllers for router
ctrl1.register(_module);
ctrl2.register(_module);

_module.config(['$routeProvider', '$locationProvider', function ($routeProvider) {
    $routeProvider
        .when('/',
        {
            controller: 'MainController',
            template: require('raw!./main/main-controller.html')
        })
        .when('/studio',
        {
            template: require('raw!./studio/studio-controller.html'),
            controller: 'StudioController'
        });

}]);



