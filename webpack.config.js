module.exports = {
    entry: "./.tmp/mandrill-public-root.js",
    resolve: {
        fallback: __dirname + '/src'
    },
    output: {
        path: __dirname,
        filename: "build/build.js"
    },
    module: {
        loaders: [
            // try loaders:
            // discussion https://github.com/webpack/webpack/issues/61
            // https://github.com/jgoz/typescript-loader
            // https://github.com/robarnold/ts-loader + forks
            // https://github.com/pixelbutler/pixelbutler - example
        ]
    }
};