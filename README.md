# Angular + Typescript + Stylus application packaged with webpack example

Just a proof of concept how [webpack](http://webpack.github.io) handles Angular applications written in TypeScript.

See [Blog post](https://medium.com/@bestander_nz/c5127b55ec86) with the explanation what it is about.

## Structure

```text
project/
|
|-- Grintfile.js                    # build script
|
|-- index.html                      # root HTML file, open directly in FF, Safari or IE after compiling
|
|-- bower_components/               # thirdparty libraries
|   ...
|
|-- src/             # Partials
|   |-- lib.d.ts                        # require function TS definition
|   |-- mandrill-public-root.ts         # root of the application that defines Angular module and all components and libs
|   |-- main/
|   |   |-- main-controller.html        # HTML template for controller
|   |   |-- main-controller.styl        # stylesheet in Stylus for the controller
|   |   |-- main-controller.ts          # Controller main code that refers styles and directives it uses
|   |   |-- main-directive.html         # HTML template for directive
|   |   |-- main-directive.ts           # Directive code that refers HTML template
|   |-- studio/
|   |   ...
```

## Compiling and running

* Make sire [Grunt](http://gruntjs.com/getting-started) is installed
* Run `npm install` to install all webpack loaders
* Run `grunt` to execute compilation and packaging
* Open index.html from file or ad-hoc static web server