var express = require('express')
var path = require('path')
var bodyparser = require('body-parser')
var app = express()

app.use(bodyparser.json());
app.use('/api/posts', require('./controllers/api/posts'));
app.use('/api/sessions', require('./controllers/api/sessions'))
app.use('/api/users', require('./controllers/api/users'))
app.use(require('./controllers/static'));

app.use('/scripts', express.static('node_modules/bootstrap/dist/css/'));
app.use('/scripts', express.static('node_modules/angular/'));
app.use('/scripts', express.static('node_modules/angular-route/'));

app.use('/public', express.static('assets/'));
app.use('/fonts', express.static('node_modules/bootstrap/dist/fonts/'));

app.listen(3000, function() {
  console.log('Server running on port 3000.');
})
