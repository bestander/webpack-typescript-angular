"use strict";

var webpack = require('webpack');
var fs = require('fs');
var util = require('util');

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-webpack');

    //var webpackProps = {
    //    externals: {
    //        angular: "window.angular"
    //    }
    //};
    //main: _.extend({
    //    output: {
    //        filename: "build/main.js"
    //    },
    //    entry: "./src/main-root.js"
    //}, webpackProps),
    //unicorns: _.extend({
    //    output: {
    //        filename: "build/unicorns.js"
    //    },
    //    entry: "./src/unicorns-root.js"
    //}, webpackProps)

    function SuffixOverridePlugin() {
    }
    SuffixOverridePlugin.prototype.apply = function(compiler) {
        compiler.plugin("normal-module-factory", function(nmf) {
            nmf.plugin("after-resolve", function(result, callback) {
                //console.log("AAAAA", arguments)
                if(!result) return callback();
                var fileExt = result.resource.split('.').pop();
                var override = result.resource.slice(0, -fileExt.length - 1) + '-UNICORNS.' + fileExt;
                if(fs.existsSync(override)){
                    result.resource = override;
                }

                callback(null, result);
            });
        });
    };


    grunt.initConfig({
        clean: {
            all: ['src/**/*.js', 'build']
        },
        typescript: {
            build: {
                src: ['src/**/*.ts'],
                dest: 'src',
                options: {
                    module: 'commonjs',
                    target: 'es5',
                    basePath: 'src'
                }
            }
        },
        webpack: {
            all: {
                entry: {
                    main: "./src/main-root.js",
                    unicorns: "./src/unicorns-root.js"
                },
                externals: {
                    angular: "window.angular"
                },
                module: {
                    loaders: [
                        { test: /\.styl$/, loader: 'style-loader!raw!stylus-loader' }
                    ]
                },
                output: {
                    path: 'build',
                    filename: '[name].js' // Template based on keys in entry above
                },
                plugins: [
                    new webpack.optimize.CommonsChunkPlugin('common.js'), // webpack will extract common pieces
                    new SuffixOverridePlugin()
                ]
            }
        }
    });

    grunt.registerTask('default', ['clean', 'typescript', 'webpack'])
};
