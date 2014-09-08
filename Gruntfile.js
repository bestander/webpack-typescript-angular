"use strict";

var webpack = require('webpack');
var fs = require('fs');
var _ = require('lodash');

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-webpack');

    var webpackProps = {
        module: {
            loaders: [
                { test: /\.styl$/, loader: 'style-loader!raw!stylus-loader' },
                { test: /\.html$/, loader: 'raw' }
            ]
        },
        externals: {
            angular: "window.angular"
        }
    };

    function SuffixOverridePlugin(context) {
        this._context = context;
    }
    SuffixOverridePlugin.prototype.apply = function(compiler) {
        var context = this._context;
        compiler.plugin("normal-module-factory", function(nmf) {
            nmf.plugin("after-resolve", function(result, callback) {
                if(!result) return callback();
                var fileExt = result.resource.split('.').pop();
                var override = result.resource.slice(0, -fileExt.length - 1) + '-' + context + '.' + fileExt;
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
            main: _.extend({
                output: {
                    filename: "build/main.js"
                },
                entry: "./src/main-root.js",
                plugins: [
                    new SuffixOverridePlugin('main')
                ]
            }, webpackProps),
            unicorns: _.extend({
                output: {
                    filename: "build/unicorns.js"
                },
                entry: "./src/unicorns-root.js",
                plugins: [
                    new SuffixOverridePlugin('unicorns')
                ]

            }, webpackProps)
        }
    });

    grunt.registerTask('default', ['clean', 'typescript', 'webpack:main', 'webpack:unicorns'])
};
