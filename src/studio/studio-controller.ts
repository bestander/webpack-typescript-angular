/// <reference path="../../lib.d.ts" />

resourceRequire("style!raw!stylus!./studio-controller.styl");

export function register(_module) {
    _module.controller('StudioController', function () {
        console.log("Studio controller loaded");
    });
}
