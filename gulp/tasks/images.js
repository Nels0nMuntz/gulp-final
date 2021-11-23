const gulp = require('gulp');

module.exports = function images(){
    return gulp.src(['src/img/**/*.{png,jpg,jpeg,gif}', '!src/img/sprite/*.*'])
        .pipe(gulp.dest('build/img'))
};