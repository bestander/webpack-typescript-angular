/// <reference path="../../lib.d.ts" />

__webpack_require__("style!raw!./studio-controller.css");

export function register(_module) {
    _module.controller('StudioController', function () {
        console.log("Studio controller loaded");
    });
}
