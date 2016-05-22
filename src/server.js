var express = require('express')
var path = require('path')
var bodyparser = require('body-parser')
var Post = require('./models/post')
var app = express()

app.use(bodyparser.json());
app.use('/scripts', express.static('../node_modules/bootstrap/dist/css/'));
app.use('/scripts', express.static('../node_modules/angular/'));
app.use('/public', express.static('../public/'));
app.use('/fonts', express.static('../node_modules/bootstrap/dist/fonts/'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/posts.html');
})


app.get('/api/posts', function (req, res, next) {
  Post.find(function (err, posts) {
    if (err) { return next(err) }
    res.json(posts)
  })
})

app.post('/api/posts', function (req, res, next) {
  var post = new Post({
    username: req.body.username,
    body:     req.body.body,
  })
  post.save(function (err, post) {
    if (err) { return next(err) }
    res.status(201).json(post)
  })
})

app.listen(3000, function() {
  console.log('Server running on port 3000.');
})
