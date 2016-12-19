module.exports = function (gulp, $, log, config) {
    gulp.task('styles', ['styles:app']);

    gulp.task('styles:app', function () {
        log.info('Building Styles');
        return gulp.src(config.src)
            .pipe($.plumber())
            .pipe($.sass())
            .pipe($.if(config.useSourceMaps, $.sourcemaps.init()))
            .pipe($.autoprefixer())
            .pipe($.if(config.useSourceMaps, $.sourcemaps.write('.')))
            .pipe(gulp.dest(config.dest));
    });
};
