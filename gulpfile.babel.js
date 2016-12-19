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

gulp.task('watch', function() {
    log.info('Watching the source files');
    gulp.watch(settings.paths.sass.all, ['styles', 'scripts']);
    gulp.watch(settings.paths.js.all, ['scripts']);
});

// Default task ran by Gulp
gulp.task('default', ['styles', 'scripts', 'watch']);
