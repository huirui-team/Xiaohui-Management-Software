var gulp         = require('gulp');
var stylus       = require('gulp-stylus');
var nib          = require('nib');
gulp.task('stylus', function () {
    gulp.src('stylusExample/src/*.styl')
        .pipe(stylus(
            { use: [nib()] }  /* 直接调用nib，就可以一并编译 */
        ))
        .pipe(gulp.dest('css/'))
});