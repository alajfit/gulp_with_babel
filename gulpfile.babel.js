'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

import { rollup } from 'rollup';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';

import settings from './src/gulp/gulp.options';
import { loadTask } from './src/gulp/gulp.helpers';

gulp.task('styles', () => {
    return gulp.src(settings.paths.sass.src)
        .pipe($.plumber())
        .pipe($.sass())
        .pipe($.sourcemaps.init())
        .pipe($.autoprefixer())
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(settings.paths.sass.build));
});

gulp.task('scripts', () => {
    return rollup({
        entry: settings.paths.js.src,
        plugins: [
            postcss({
                extensions: [ '.css' ]
            }),
            babel({
                presets: [
                    [
                        'es2015', {
                            'modules': false
                        }
                    ]
                ],
                sourceMaps: true,
                babelrc: false,
                exclude: 'node_modules/**'
            })
        ]
    })
    .then(bundle => {
        return bundle.generate({
            format: 'umd',
            moduleName: 'myModuleName',
            sourceMap: true,
            globals: {

            }
        });
    })
    .then(gen => {
        return $.file('app.js', gen.code, { src: true })
            .pipe(gulp.dest(settings.paths.js.build));
    });
});

gulp.task('default', ['styles', 'scripts']);
