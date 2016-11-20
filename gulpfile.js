var gulp = require('gulp')
var fs   = require('fs')

fs.readdirSync(__dirname + '/gulp').forEach(function (task) {
  require('./gulp/' + task)
})

gulp.task('build', ['app_js', 'app_css'])
gulp.task('watch', ['watch:all_js', 'watch:styles_js'])
gulp.task('dev', ['watch', 'dev:server'])
