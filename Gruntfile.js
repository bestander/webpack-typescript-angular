"use strict";

var webpack = require('webpack');
var _ = require('lodash');
var webpackConfig = require("./webpack.config.js");
var SuffixOverridePlugin = require('./suffix-override-plugin');


module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-concurrent');

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
            },
            watch: {
                src: ['src/**/*.ts'],
                dest: 'src',
                options: {
                    module: 'commonjs',
                    target: 'es5',
                    basePath: 'src',
                    watch: 'src'
                }
            }
        },
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            dev: {
                tasks: ["typescript:watch", "webpack-dev-server:start"]
            }
        },
        webpack: {
            options: webpackConfig,
            main: {
                entry: "./src/main-root.js",
                plugins: [
                    new SuffixOverridePlugin('main')
                ],
                output: {
                    filename: "main.js"
                }

            },
            unicorns: {
                entry: "./src/unicorns-root.js",
                plugins: [
                    new SuffixOverridePlugin('unicorns')
                ],
                output: {
                    filename: "unicorns.js"
                }
            }
        },
        "webpack-dev-server": {
            options: {
                webpack: webpackConfig,
                publicPath: "/" + webpackConfig.output.publicPath
            },
            start: {
                keepAlive: true,
                webpack: {
                    devtool: "eval",
                    debug: true,
                    plugins: [
                        new webpack.HotModuleReplacementPlugin()
                    ],
                    entry: [
                        'webpack-dev-server/client?http://localhost:8080',
                        'webpack/hot/dev-server'
                    ]
                }
            }
        }

    });

    grunt.registerTask('default', ['clean', 'typescript:build', 'webpack:main', 'webpack:unicorns']);
    // see https://github.com/webpack/webpack-with-common-libs/blob/master/Gruntfile.js for other build options
    grunt.registerTask('dev', ['clean', 'typescript:build', 'concurrent:dev']);

};
