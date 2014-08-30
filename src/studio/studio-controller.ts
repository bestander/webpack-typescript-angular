/// <reference path="../../lib.d.ts" />

resourceRequire("style!raw!./studio-controller.css");

export function register(_module) {
    _module.controller('StudioController', function () {
        console.log("Studio controller loaded");
    });
}
