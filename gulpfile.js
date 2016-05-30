var gulp = require('gulp')
var fs   = require('fs')

fs.readdirSync(__dirname + '/gulp').forEach(function (task) {
  require('./gulp/' + task)
})

gulp.task('build', ['posts_js', 'todo_js'])
gulp.task('watch', ['watch:all_js'])
gulp.task('dev', ['watch:all_js', 'dev:server'])
