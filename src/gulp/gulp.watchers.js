module.exports = function (gulp, $, log, config) {
    gulp.task('watchers', ['watchers:styles', 'watchers:scripts']);

    gulp.task('watchers:styles', function() {
        log.info('Watching the styles');
        gulp.watch(config.sassSrc, function() {
            $.sequence('styles', 'scripts');
        });
    });
    gulp.task('watchers:scripts', function() {
        log.info('Watching the scripts');
        gulp.watch(config.jsSrc, function() {
            $.sequence('scripts')
        })
    });
};
