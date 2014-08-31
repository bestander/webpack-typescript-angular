/// <reference path="../lib.d.ts" />

export function register(_module) {
    _module.directive('mainDirective', function () {
        return {
            scope: {
            },
            restrict: 'AE',
            link: function (scope, element) {
                console.log("loaded mainDirective");
            },
            template: require('raw!./main-directive.html')

        }
    });
}

