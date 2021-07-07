# TS Project Template
A simple template for using NPM tasks to build and compile TypeScript, JavaScript, CSS, and image files.
Based on [Chris Ferdinandi's Build Tool Boilerplate](https://github.com/cferdinandi/build-tool-boilerplate)


**Install**

- [Install Node.js.](http://nodejs.org/)

**Quick Start**

Each task has just one or two dependencies (*except for image optimization*), so I recommend deleting the ones you don't need before running `npm install`. Learn more in [the documentation](#documentation) below.

1. In bash/terminal/command line, `cd` into your project directory.
2. Run `npm install`.
3. Run `npm run build`.
4. Run `npm start` to start local development


## Documentation

This is a template that you can use as a starting point for your projects.

[Running Tasks](#running-tasks) · [JavaScript](#javascript) · [Sass => CSS](#sass--css) · [SVG Optimization](#svg-optimization) · [Image Optimization](#image-optimization) · [Copy Files](#copy-files) · [Clean](#clean) · [Complete Build](#complete-build) · [Watch for Changes](#watch-for-changes) · [Server](#server)


### Running Tasks

The template uses the `npm run` command to run tasks. These work on macOS, Linux, and Windows systems.

```bash
# Main Tasks
npm start      # run a localhost server that reloads when files change]
npm run test   # run tests
npm run ts     # compile ts
npm run js     # compile and minify
npm run css    # compile and minify Sass into CSS
npm run svg    # optimize SVGs with SVGO
npm run img    # optimize image files
npm run copy   # copy files from the src/copy directory as-is into /dist
npm run clean  # delete the /dist directory
npm run build  # run all tasks
npm run watch  # watch for changes and rebuild

# Modular Tasks
npm run watch-ts     # watch for changes to the /ts directory
npm run watch-js     # watch for changes to the /js directory
npm run watch-css    # watch for changes to the /css directory
npm run watch-svg    # watch for changes to the /svg directory
npm run watch-img    # watch for changes to the /img directory
npm run watch-copy   # watch for changes to the /copy directory
npm run build-dirty  # run a new build without deleting the /dist directory
npm run server-start # start a server without watching for changes
```

### Local Development
use `npm run start` to build the project and start a server that reloads when file changes are detected.

### TypeScript
Before any minification and bundling is done, all .ts files are first compiled and moved to the ./compiledjs folder.

TypeScript files should be in the `src/ts` directory. 

### JavaScript

The template uses [rollup.js](https://rollupjs.org) with the [terser](https://terser.org/) plugin to parse, compile, and minify JavaScript files.

```json
{
    "devDependencies": {
        "rollup": "^2.6.1",
        "rollup-plugin-terser": "^7.0.2"
    }
}
```

In the `rollup.config.js` file, there's a `configs` object that you can use to control what rollup.js does.

```js
// Configs
var configs = {
    name: 'MyProject',                // Global namespace to use for IIFEs [optional]
    files: ['main.js', 'detects.js'], // The files to process
    formats: ['iife', 'es'],          // The formats to output - will be added as a suffix to the filename (ex. main.es.js)
    default: 'iife',                  // Files with this format will not have a format suffix [optional]
    pathIn: 'src/js',                 // The source directory for your JS files
    pathOut: 'dist/js',               // The directory to compile JS files into
    minify: true,                     // If true, a minified version will also be created with the .min suffix
    sourceMap: false                  // If true, sourcemaps are created for each processed file †
};
```

A banner is automatically generated from your `package.json` data.

It includes the project name and version, a copyright notice with the current year and the package author name, the license type, and a link to the project repository.

_If a `configs.name` property is included, that will be used. If not, the banner defaults to the `name` property in your `package.json` file._

```js
// Banner
var banner = `/*! ${configs.name ? configs.name : pkg.name} v${pkg.version} | (c) ${new Date().getFullYear()} ${pkg.author.name} | ${pkg.license} License | ${pkg.repository.url} */`;
```

To concatentate multiple files into one, use the ES modules `import` feature.

```js
// myplugin.js
// This will compile into /dist/js/myplugin.js, and will include helpers.js, app.js, and event-listeners.js

import * as Helpers from './helpers.js';
import app from './app.js';
import './event-listeners.js';
```

_**Note for FireFox users:** ensure that ['Use Source Maps'](https://github.com/cferdinandi/build-tool-boilerplate/issues/7#issuecomment-811432626), and ['Show original sources'](https://github.com/cferdinandi/build-tool-boilerplate/issues/7#issuecomment-811855711) options are enabled in Developer Tools._

### Sass => CSS

The template uses the Node implementation of [dart-sass](https://sass-lang.com/dart-sass) to parse `.scss` files into CSS.

```json
{
    "devDependencies": {
        "sass": "^1.26.5"
    }
}
```

In the `sass.js` file, there's a `configs` object that you can use to control what `dart-sass` does.

```js
// Configs
var configs = {
    name: 'MyProject',    // The name to use in the file banner
    files: ['main.scss'], // The files to process
    pathIn: 'src/scss',   // The source directory for your Sass files
    pathOut: 'dist/css',  // The directory to compile CSS files into
    indentType: 'tab',    // The type of indenting to use ['tab'|'spaces']
    indentWidth: 1,       // How many tabs or spaces to indent
    minify: true,         // If true, a minified version will also be created with the .min suffix
    sourceMap: false,     // If true, sourcemaps are created for each processed file †
};
```

A banner is automatically generated from your `package.json` data.

It includes the project name and version, a copyright notice with the current year and the package author name, the license type, and a link to the project repository.

_If a `configs.name` property is included, that will be used. If not, the banner defaults to the `name` property in your `package.json` file._

```js
// Banner
var banner = `/*! ${configs.name ? configs.name : pkg.name} v${pkg.version} | (c) ${new Date().getFullYear()} ${pkg.author.name} | ${pkg.license} License | ${pkg.repository.url} */`;
```

Sass files should be in the `src/scss` directory. Use this task to run the build.

```bash
npm run css
```

_**Note for FireFox users:** ensure that ['Use Source Maps'](https://github.com/cferdinandi/build-tool-boilerplate/issues/7#issuecomment-811432626), and ['Show original sources'](https://github.com/cferdinandi/build-tool-boilerplate/issues/7#issuecomment-811855711) options are enabled in Developer Tools._

### SVG Optimization

The template uses [svgo](https://github.com/svg/svgo) to remove the cruft that gets added to SVG files by many editors.

```json
{
    "devDependencies": {
        "svgo": "^1.3.2"
    }
}
```

For accessibility reasons, the boilerplate disables the settings that remove the `title` element and `viewBox` attribute.

You can make additional command line configurations under the `svg` tasks in the `scripts` property of the `package.json` file.

```bash
svgo -f src/svg dist/svg -r --disable=removeViewBox,removeTitle
```

SVGs should be in the `src/svg` directory. Use this task to run the build.

```bash
npm run svg
```


### Image Optimization

The template uses [imagemin](https://www.npmjs.com/package/imagemin), with the [MozJPEG](https://github.com/imagemin/imagemin-mozjpeg), [pngcrush](https://github.com/imagemin/imagemin-pngcrush), [pngquant](https://github.com/imagemin/imagemin-pngquant), and [zopfli](https://github.com/imagemin/imagemin-zopfli) plugins.

(*Yea, that's kind of lot, isn't it?*)

```json
{
    "devDependencies": {
        "imagemin-cli": "^6.0.0",
        "imagemin-mozjpeg": "^8.0.0",
        "imagemin-pngcrush": "^6.0.0",
        "imagemin-pngquant": "^8.0.0",
        "imagemin-zopfli": "^6.0.0"
    }
}
```

Image files should be in the `src/img` directory. Use this task to run the build.

```bash
npm run img
```

### Copy Files

The template uses [recursive-fs](https://github.com/simov/recursive-fs) to provide a cross-OS copying solution. This package is also used for the `clean` task, so only remove it if you're deleting both tasks.

```json
{
    "devDependencies": {
        "recursive-fs": "^2.1.0"
    }
}
```

If you have files you want copied as-is, place them in the `src/copy` directory.

Use this task to run the build.

```bash
npm run copy
```

### Clean

The template uses [recursive-fs](https://www.npmjs.com/package/recursive-fs) to provide a cross-OS recursive directory deleting solution. This package is also used for the `copy` task, so only remove it if you're deleting both tasks.

```json
{
    "devDependencies": {
        "recursive-fs": "^2.1.0"
    }
}
```

You can delete the `/dist` directory before running a build to clean up any junk that might have ended up there. The `build` task runs this task before doing anything else.

```bash
npm run clean
```


### Complete Build

You can run all of your build tasks in a single command.

Use this task to run the build.

```bash
npm run build
```

If you want to run your build _without_ first deleting the `/dist` directory, run this task instead.

```bash
npm run build-dirty
```

Regardless of which task you use, be sure to delete any tasks you're not using from the `build-dirty` task under `scripts` in your `package.json` file first. The `npm-run-all -p` command is used to run all tasks in parallel ([see below for more details](#core-dependencies)).

```bash
# default build-dirty task
npm-run-all -p js css svg img copy
```

#### What 'build' DOES NOT do:
- uglify all JS
- bundle all JS into a single file. 
    Instead, it bundles based on the input files you assign in the rollup config. So it is more modular.

### Watch for Changes

The template uses [Chokidar CLI](https://www.npmjs.com/package/chokidar-cli) to watch for changes to the `/src` directory and run tasks in response.

```json
{
    "devDependencies": {
        "chokidar-cli": "^2.1.0"
    }
}
```

Use this task to watch for changes and run a build. It will also run a fresh build when it starts.

```bash
npm run watch
```

If you only want to watch for changes to a specific directory in `/src`, you can use a task-specific watcher task.

```bash
npm run watch-js   # watch for changes to the /js directory
npm run watch-css  # watch for changes to the /css directory
npm run watch-svg  # watch for changes to the /svg directory
npm run watch-img  # watch for changes to the /img directory
npm run watch-copy # watch for changes to the /copy directory
```


## Server

The template uses [Browsersync](https://www.browsersync.io/) to run a local server and automatically update it whenever your files change.

```json
{
    "devDependencies": {
        "browser-sync": "^2.26.14"
    }
}
```

Use this task to watch for changes. It will also run the `watch` task, and automatically rebuild whenever a file in `/src` changes.

```bash
npm run server
```

If you want to run the server _without_ the `watch` task, run this task instead.

```bash
npm run server-start
```



## Core Dependencies

The template uses [npm-run-all](https://www.npmjs.com/package/npm-run-all) to run tasks consistently across different operating systems, and in parallel.

```json
{
    "devDependencies": {
        "npm-run-all": "^4.1.5"
    }
}
```

The `npm-run-all` package removes the need for Windows-specific tasks.

It also allows you to run tasks in parallel. By running all of the tasks in the `build` tasks at the same time, you dramatically reduce the build time. This is also what makes it possible to run a localhost server _and_ watch for file changes in one task.

**In other words, don't remove this dependency.**



## Why does this exist?

I have been working with Webpack until now and I was never quite pleased with the way webpack worked. 
Too much magic for my taste. I wanted something simple and lean. I found Chris Ferdinandi's Boilerplate project and it 
was exactly what I was looking for. I added TypeScript and a test-framework. 
