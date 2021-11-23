const gulp = require('gulp');
// const plumber = require('gulp-plumber');
// const rename = require('gulp-rename');
// const terser = require('gulp-terser');

module.exports = function script() {
    return gulp.src('src/js/*.js')
        // .pipe(plumber())
        // .pipe(terser())
        // .pipe(rename({
        //     suffix: '.min',
        // }))
        .pipe(gulp.dest('build/js'))
};