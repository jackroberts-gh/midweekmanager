var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.json());
app.use(require('./auth'));
app.use('/api/posts', require('./controllers/api/posts'));
app.use('/api/sessions', require('./controllers/api/sessions'));
app.use('/api/users', require('./controllers/api/users'));
app.use('/api/teams', require('./controllers/api/teams'));
app.use('/api/players', require('./controllers/api/players'));
app.use('/api/fixtures', require('./controllers/api/fixtures'));
app.use(require('./controllers/static'));

app.use('/scripts', express.static('node_modules/jquery/dist/'));
app.use('/scripts', express.static('node_modules/bootstrap/dist/css/'));
app.use('/scripts', express.static('node_modules/bootstrap/dist/js/'));
app.use('/scripts', express.static('node_modules/angular-toggle-switch/'));
app.use('/scripts', express.static('node_modules/angular/'));
app.use('/scripts', express.static('node_modules/angular-route/'));
app.use('/scripts', express.static('node_modules/jquery/dist/'));
app.use('/scripts', express.static('node_modules/font-awesome/css/'));

app.use('/public', express.static('assets/'));
app.use('/public', express.static('assets/images/'));
app.use('/fonts', express.static('node_modules/bootstrap/dist/fonts/'));
app.use('/fonts', express.static('node_modules/font-awesome/fonts/'));

app.listen(3000, function() {
  console.log('Midweek Manager is running on port 3000.');
})
