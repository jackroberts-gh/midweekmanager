var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

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
        .pipe(gulp.dest('dist'))
})
