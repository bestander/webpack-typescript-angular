var fs = require('fs');


function SuffixOverridePlugin(context) {
    this._context = context;
}

SuffixOverridePlugin.prototype.apply = function (compiler) {
    var context = this._context;
    compiler.plugin("normal-module-factory", function (nmf) {
        nmf.plugin("after-resolve", function (result, callback) {
            if (!result) return callback();
            var fileExt = result.resource.split('.').pop();
            var override = result.resource.slice(0, -fileExt.length - 1) + '-' + context + '.' + fileExt;
            if (fs.existsSync(override)) {
                result.resource = override;
            }

            callback(null, result);
        });
    });
};

module.exports = SuffixOverridePlugin;