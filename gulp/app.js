'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const ngAnnotate = require('gulp-ng-annotate');

// Watches and builds everything in ng
gulp.task('watch:ng_js', ['app_js'], function() {
    gulp.watch('ng/**/*.js', ['app_js'])
})

gulp.task('app_js', function() {
    gulp.src(['ng/application/module.js', 'ng/**/*.js'])
        .pipe(concat('app.bundle.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
})
