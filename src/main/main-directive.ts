/// <reference path="../../lib.d.ts" />

export function register(_module) {
    _module.directive('mainDirective', function () {
        return {
            scope: {
            },
            restrict: 'AE',
            link: function (scope, element) {
                console.log("loaded mainDirective");
            },
            template: __webpack_require__('raw!./main-directive.html')

        }
    });
}

