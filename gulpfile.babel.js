'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

import settings from './src/gulp/gulp.options';
import { loadTask } from './src/gulp/gulp.helpers';

// Allows us to log information to the terminal with color association
var log = {
	info: function(msg) { $.util.log($.util.colors.blue(msg)) },
	error: function(msg) { $.util.log($.util.colors.red(msg)) }
};

// Loading Tasks from the sub gulp folder within our src
loadTask('styles')(gulp, $, log, {
    src: settings.paths.sass.src,
    dest: settings.paths.sass.build,
    useSourceMaps: true,
    uglifiy: false
});
loadTask('scripts')(gulp, $, log, {
    src: settings.paths.js.src,
    dest: settings.paths.js.build
});
loadTask('watchers')(gulp, $, log, {
    sassSrc: settings.paths.sass.src,
    jsSrc: settings.paths.js.src
});

// Default task ran by Gulp
gulp.task('default', ['styles', 'scripts', 'watchers']);
