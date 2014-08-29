define(["require", "exports"], function(require, exports) {

    exports.register = function register(_module) {
        require("style!raw!./main-controller.css");
        require('./main-directive').register(_module);

        _module.controller('MainController', function () {
            console.log("Main controller loaded");
        });
    }
});