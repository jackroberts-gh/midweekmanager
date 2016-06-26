var gulp = require('gulp')
var fs   = require('fs')

fs.readdirSync(__dirname + '/gulp').forEach(function (task) {
  require('./gulp/' + task)
})

gulp.task('build', ['app_js', 'cssstyls_js', 'cssless_js'])
gulp.task('watch', ['watch:all_js', 'watch:cssstyls_js', 'watch:cssless_js'])
gulp.task('dev', ['watch', 'dev:server'])
