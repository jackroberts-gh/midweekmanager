'use strict';

let Post = require('../../models/post');
let router = require('express').Router();

// \\ ** POSTS API ENDPOINT ** \\ //

router.get('/', function (req, res, next) {
    if (!req.headers['x-auth']) {
        return res.sendStatus(401)
    }
    if (req.auth.username) {
        Post.find()
            .sort('-date')
            .exec(function (err, posts) {
                if (err) { return next(err) }
                res.json(posts)
            })
    }
    else {
        res.status(401)
    }
})

router.post('/', function (req, res, next) {
    let post = new Post({
        username: req.body.username,
        body: req.body.body,
    })
    post.username = req.auth.username
    post.save(function (err, post) {
        if (err) { return next(err) }
        res.status(201).json(post)
    })
})

router.get('/:post_id', (function (req, res) {
    Post.findById(req.params.post_id, function (err, post) {
        if (err)
            res.send(err);
        res.json(post);
    });
})
)

router.put('/:post_id', function (req, res) {
    Post.findById(req.params.post_id, function (err, post) {
        if (err)
            res.send(err);

        post.username = req.body.username;
        post.body = req.body.body;

        post.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Post updated!' });
        });
    });
})

router.delete('/:post_id', function (req, res) {
    Post.remove({
        _id: req.params.post_id
    }, function (err, post) {
        if (err)
            res.send(err);
        res.json({ message: 'Successfully deleted' });
    });
})

module.exports = router;
