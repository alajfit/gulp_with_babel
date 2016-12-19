import { rollup } from 'rollup';
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import commonjs from 'rollup-plugin-commonjs';

module.exports = function (gulp, $, log, config) {
    gulp.task('scripts', ['scripts:app']);

    gulp.task('scripts:app', () => {
        log.info('Building Scripts');
        return rollup({
            entry: config.src,
            plugins: [
                postcss({
                    extensions: [ '.css' ]
                }),
                resolve({
                    jsnext: true,
                    main: true,
                    browser: true,
                }),
                commonjs(),
                eslint({
                    exclude: [
                        'src/css/**',
                    ]
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
                format: 'iife',
                moduleName: 'myModuleName',
                sourceMap: true,
                globals: {

                }
            });
        })
        .then(gen => {
            return $.file('app.js', gen.code, { src: true })
                .pipe(gulp.dest(config.dest));
        });
    });
};
