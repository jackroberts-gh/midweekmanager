var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')

// Watches and builds everything in ng
gulp.task('watch:all_js', ['posts_js', 'todo_js'], function() {
  gulp.watch('ng/**/*.js', ['posts_js', 'todo_js'])
})

gulp.task('posts_js', function() {
  gulp.src(['ng/posts/module.js', 'ng/posts/*.js'])
  .pipe(concat('midweek_js.js'))
  .pipe(ngAnnotate())
  .pipe(uglify())
  .pipe(gulp.dest('assets'))
})

gulp.task('todo_js', function() {
  gulp.src(['ng/todo/module.js', 'ng/todo/*.js'])
  .pipe(concat('todo_js.js'))
  .pipe(ngAnnotate())
  .pipe(uglify())
  .pipe(gulp.dest('assets'))
})
