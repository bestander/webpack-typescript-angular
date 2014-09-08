/// <reference path="lib.d.ts" />

require("script!../bower_components/angular/angular");
require("script!../bower_components/angular-route/angular-route");

require("./common/common.styl");

import ctrl1 = require('./main/main-controller');
import ctrl2 = require('./dragons/dragon-controller');

var angular: Angular = require("angular");
var _module = angular.module('theOnlyModule', [
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
            template: require('./main/main-controller.html')
        })
        .when('/dragons',
        {
            template: require('./dragons/dragon-controller.html'),
            controller: 'DragonController'
        });

}]);



