var gulp = require('gulp')
var fs   = require('fs')

fs.readdirSync(__dirname + '/gulp').forEach(function (task) {
  require('./gulp/' + task)
})

gulp.task('build', ['posts_js', 'todo_js', 'css_js'])
gulp.task('watch', ['watch:all_js', 'watch:css_js'])
gulp.task('dev', ['watch', 'dev:server'])
