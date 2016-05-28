var Post = require('../../models/post');
var router = require('express').Router();

router.get('/', function (req, res, next) {
  Post.find()
  .sort('-date')
  .exec(function (err, posts) {
    if (err) { return next(err) }
    res.json(posts)
  })
})

router.post('/', function (req, res, next) {
  var post = new Post({
    username: req.body.username,
    body:     req.body.body,
  })
  post.save(function (err, post) {
    if (err) { return next(err) }
    res.status(201).json(post)
  })
})

router.get('/:post_id', (function(req, res) {
        Post.findById(req.params.post_id, function(err, post) {
            if (err)
                res.send(err);
            res.json(post);
        });
    })
  )

module.exports = router;
