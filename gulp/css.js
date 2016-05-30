var gulp = require('gulp')
var stylus = require('gulp-stylus')

// Watches and builds everything in ng
gulp.task('watch:css_js', ['css_js'], function() {
  gulp.watch('styles/*.styl', ['css_js'])
})

gulp.task('css_js', function() {
  gulp.src('styles/*.styl')
  .pipe(stylus())
  .pipe(gulp.dest('assets'))
})
