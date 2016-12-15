'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';

const paths = {
    src: 'src',
    build: 'build'
};

gulp.task('styles', () => {
    return gulp.src(`${paths.src}/sass/**.*`)
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(`${paths.build}/css`));
});

gulp.task('default', ['styles']);
