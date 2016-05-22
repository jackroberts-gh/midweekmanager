var express = require('express')
var path = require('path')
var bodyparser = require('body-parser')
var app = express()

app.use('/scripts', express.static('../node_modules/bootstrap/dist/css/'));
app.use('/scripts', express.static('../node_modules/angular/'));
app.use('/public', express.static('../public/'));
app.use('/fonts', express.static('../node_modules/bootstrap/dist/fonts/'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.listen(3000, function() {
  console.log('Server running on port 3000.');
})
