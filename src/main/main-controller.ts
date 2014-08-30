/// <reference path="../../lib.d.ts" />

__webpack_require__("style!raw!./main-controller.css");
import dir = require('./main-directive');


export function register(_module) {
    dir.register(_module);
    _module.controller('MainController', function () {
        console.log("Main controller loaded");
    });
}
