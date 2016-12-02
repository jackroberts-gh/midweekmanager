(function() {
'use strict';

var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyparser = require('body-parser');
var morgan = require('morgan');
var app = express();
var logFile = fs.createWriteStream(__dirname + '/dist/access.log', {flags: 'a'})

app.use(bodyparser.json());
app.use(require('./middleware/auth'));
app.use(morgan('combined', {stream: logFile}));

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
app.use('/scripts', express.static('node_modules/bootstrap-material-design/dist/css/'));
app.use('/scripts', express.static('node_modules/bootstrap-material-design/dist/js/'));
app.use('/scripts', express.static('node_modules/arrive/src/'));
app.use('/scripts', express.static('dist/'));
app.use('/scripts', express.static('assets/'));
app.use('/scripts', express.static('styles/css/'));

app.use('/fonts', express.static('node_modules/bootstrap/dist/fonts/'));
app.use('/fonts', express.static('node_modules/font-awesome/fonts/'));
app.use('/fonts', express.static('node_modules/bootstrap-material-design/dist/fonts/'));

app.listen(process.env.PORT || 3000, function() {
  console.log('Midweek Manager is running on port ' + (process.env.PORT || 3000));
})
})();
