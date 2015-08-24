# Remote SVG Demo

This is a really simple demonstration of how to install and use the [Remote SVG](https://github.com/jamesmartin/remote-svg) library.

Remote SVG is distributed exclusively via the [jspm](http://jspm.io) package management system. If anything in these instructions stops working, you should check the [jspm cli documentation](https://github.com/jspm/jspm-cli/wiki/Getting-Started), as things are moving fast at the time of writing.

Roughly, to recreate this demo project, follow these steps:

1. Initialize a new jspm project: `jspm init -y`
1. Install Remote SVG as a dependency: `jspm install remote-svg=github:jamesmartin/remote-svg`
1. Recreate the [./index.html](./index.html), [./lib/main.js](./lib/main.js) and [./lib/loadSvg.js](./lib/loadSvg.js) source files.
1. Remember to run the app over HTTP (to keep Chrome happy). I use [live-server](https://www.npmjs.com/package/live-server).
