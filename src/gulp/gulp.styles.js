module.exports = function (gulp, $, config) {
    gulp.task('styles', function() {
        $.gulpSequence('styles:app');
    });

    gulp.task('styles:app', function() {
        
    });
};
