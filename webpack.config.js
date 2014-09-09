var fs = require('fs');
var path = require('path');


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

module.exports = {
    module: {
        loaders: [
            {test: /\.styl$/, loader: 'style-loader!raw!stylus-loader'},
            {test: /\.html$/, loader: 'raw'}
        ]
    },
    externals: {
        angular: "window.angular"
    },
    output: {
        path: path.join(__dirname, "build"),
        publicPath: "build/",
        filename: "[name].js"
    },
    entry: [
        "./src/main-root.js"
    ],
    plugins: [
        new SuffixOverridePlugin('main')
    ]
};