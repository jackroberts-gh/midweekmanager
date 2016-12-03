var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');

// Watches and builds everything in ng
gulp.task('watch:all_js', ['app_js', 'vendor_js'], function () {
  gulp.watch('ng/**/*.js', ['app_js'])
})

gulp.task('app_js', function () {
  gulp.src(['ng/application/module.js', 'ng/**/*.js'])
    .pipe(concat('app.bundle.js'))
    .pipe(ngAnnotate())
    .pipe(uglify({ mangle: { toplevel: true } }))
    .pipe(gulp.dest('dist'))
})

gulp.task('vendor_js', function () {
  gulp.src(['node_modules/jquery/dist/jquery.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'node_modules/angular/angular.js',
    'node_modules/angular-toggle-switch/angular-toggle-switch.js',
    'node_modules/angular-route/angular-route.js',
    'node_modules/arrive/src/arrive.js',
    'node_modules/bootstrap-material-design/dist/js/material.js',
    'node_modules/bootstrap-material-design/dist/js/ripples.js'])
    .pipe(concat('vendor.bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
})
