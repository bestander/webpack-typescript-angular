module.exports = {
    entry: "./mandrill-public-root.js",
    output: {
        path: __dirname,
        filename: "build/build.js"
    },
    module: {
    //    loaders: [
    //        { test: /\.css$/, loader: "style!css" }
    //    ]
    }
};