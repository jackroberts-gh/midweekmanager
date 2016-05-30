var express = require('express')
var router  = express.Router()
var rootPath = __dirname + '/../layouts'

router.get('/', function(req, res) {
  res.sendFile('app.html', { root: rootPath });
})

router.get('/todolist', function(req, res) {
  res.sendFile('todo.html', { root: rootPath });
})

router.use(express.static(__dirname + '/../templates'))

module.exports = router
