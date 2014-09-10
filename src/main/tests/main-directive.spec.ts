/// <reference path="../../lib.d.ts" />

require("script!../../../bower_components/angular/angular");
require("script!../../../bower_components/angular-mocks/angular-mocks");

import mainDirective = require('../main-directive');
var angular: ng.IAngularStatic = require('angular');

describe('main Directive', function () {

    var scope;
    var element;

    beforeEach(function(){
        var testModule = angular.module('testModule', []);
        mainDirective.register(testModule);
    });

    beforeEach(inject( function ($rootScope, $compile) {
        scope = $rootScope.$new();
        element = angular.element('<div main-directive></div>');
        angular.bootstrap(element[0],['testModule']);
        element = $compile(element)(scope);
        scope.$digest();
    }));

    it('should execute test', function() {
        expect(element.find('b')[0].innerHTML).toEqual("CONTENT OF MAIN DIRECTIVE");
    });
});
