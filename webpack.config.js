var path = require('path');
var SuffixOverridePlugin = require('./suffix-override-plugin');

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