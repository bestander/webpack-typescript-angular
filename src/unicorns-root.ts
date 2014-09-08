/// <reference path="lib.d.ts" />

require("script!../bower_components/angular/angular");
require("script!../bower_components/angular-route/angular-route");

require("./common/common.styl");


import ctrl1 = require('./unicorns/unicorns-controller');

var angular: Angular = require("angular");
var _module = angular.module('theOnlyModule', [
    'ngRoute'
]);

// controllers for router
ctrl1.register(_module);

_module.config(['$routeProvider', '$locationProvider', function ($routeProvider) {
    $routeProvider
        .when('/',
        {
            controller: 'UnicornsController',
            template: require('raw!./unicorns/unicorns-controller.html')
        })


}]);

