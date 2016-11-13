var gulp = require('gulp')
var stylus = require('gulp-stylus')
var less = require('gulp-less')

// Watches and builds everything in styles
gulp.task('watch:cssstyls_js', ['cssstyls_js'], function() {
  gulp.watch('styles/*.styl', ['cssstyls_js'])
})

gulp.task('watch:cssless_js', ['cssless_js'], function() {
  gulp.watch('styles/*.less', ['cssless_js'])
})

gulp.task('cssstyls_js', function() {
  gulp.src('styles/*.styl')
  .pipe(stylus())
  .pipe(gulp.dest('dist'))
})

gulp.task('cssless_js', function() {
  gulp.src('styles/*.less')
  .pipe(less())
  .pipe(gulp.dest('dist'))
})
