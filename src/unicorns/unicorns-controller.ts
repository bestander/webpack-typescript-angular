/// <reference path="../lib.d.ts" />

require("./unicorns-controller.styl");

export function register(_module) {
    _module.controller('UnicornsController', function () {
        console.log("Unicorns controller loaded");
    });
}
