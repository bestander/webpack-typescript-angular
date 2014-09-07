/// <reference path="../lib.d.ts" />

require("style!raw!stylus!./dragon-controller.styl");

export function register(_module) {
    _module.controller('DragonController', function () {
        console.log("Dragon controller loaded");
    });
}
