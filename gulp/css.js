'use strict';

const gulp = require('gulp')
const stylus = require('gulp-stylus')
const less = require('gulp-less')
const concat = require('gulp-concat');

// Watches and builds everything in styles
gulp.task('watch:styles_js', ['app_css'], function () {
    gulp.watch(['styles/*.less', 'styles/*.styl'], ['css_concat'])
})

gulp.task('app_css', ['cssless_js', 'cssstyls_js'], function () {
    gulp.src(['node_modules/bootstrap/dist/css/bootstrap.css',
        'node_modules/bootstrap-material-design/dist/css/material.css',
        'node_modules/bootstrap-material-design/dist/css/ripples.css',
        'node_modules/bootstrap-material-design/dist/css/roboto.css',
        'node_modules/angular-toggle-switch/angular-toggle-switch.css',
        'node_modules/font-awesome/css/font-awesome.css',
        'styles/css/homepage.css',
        'styles/css/card.css'])
        .pipe(concat('styles.bundle.css'))
        .pipe(gulp.dest('dist'))
})

gulp.task('cssstyls_js', function () {
    gulp.src('styles/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('styles/css'))
})

gulp.task('cssless_js', function () {
    gulp.src('styles/*.less')
        .pipe(less())
        .pipe(gulp.dest('styles/css'))
})
