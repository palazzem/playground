var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('transpile', function () {
    return gulp.src('js/*.js')
        .pipe(babel())
        .pipe(gulp.dest('build/'));
});

gulp.task('watch', ['transpile'], function () {
    gulp.watch('js/*.js', ['transpile'])
});

gulp.task('default', ['watch']);
