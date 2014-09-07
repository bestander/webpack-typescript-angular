/// <reference path="../lib.d.ts" />

require("style!raw!stylus!./unicorns-controller.styl");

export function register(_module) {
    _module.controller('UnicornsController', function () {
        console.log("Unicorns controller loaded");
    });
}
