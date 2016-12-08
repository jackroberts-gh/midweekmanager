'use strict';
let express = require('express')
let router = express.Router()
let rootPath = __dirname + '/../layouts'

router.get('/', function (req, res) {
  res.sendFile('app.html', { root: rootPath });
})

router.use(express.static(__dirname + '/../templates'));

module.exports = router
