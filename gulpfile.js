var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var watch = require('gulp-watch');


gulp.task('watch', function() {
    watch("src/*.scss", { verbose: true },function () {
        // console.log("in watch");
        gulp.src('src/index.scss')
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('wwwroot/assets/css'));
    });
});
