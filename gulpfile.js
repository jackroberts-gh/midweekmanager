var gulp = require('gulp')
var fs = require('fs')
var nodemon = require('gulp-nodemon')

fs.readdirSync(__dirname + '/gulp').forEach(function(task) {
    require('./gulp/' + task)
})

gulp.task('default', ['dev'])
gulp.task('build', ['app_js', 'app_css', 'vendor_js'])
gulp.task('watch', ['watch:all_js', 'watch:styles_js'])
gulp.task('dev', ['watch'], function() {
    setTimeout(function() {
        nodemon({
            script: 'app.js',
            ext: 'js styl less',
        })
    }, 500);
})
