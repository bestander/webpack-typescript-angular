define(["require", "exports"], function(require, exports) {



    exports.register = function register(_module) {
        require("style!raw!./studio-controller.css");

        _module.controller('StudioController', function () {
            console.log("Studio controller loaded");
        });
    }
});