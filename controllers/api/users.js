'use strict';

let router = require('express').Router()
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')
let User = require('../../models/user')
let config = require('../../config')

// \\ ** USERS API ENDPOINT ** \\ //

router.get('/', function(req, res, next) {
  if (!req.headers['x-auth']) {
    return res.sendStatus(401);
  }
  let auth = jwt.verify(req.headers['x-auth'], config.secret);
  User.findOne({
    username: auth.username
  }, function(err, user) {
    if (err) {
      return next(err);
    }
    res.json(user)
  })
})

router.get('/:user_id', function(req, res, next) {
  if (!req.headers['x-auth']) {
    return res.sendStatus(401);
  }
  if (req.auth.username) {
    User.findOne({
      _id: req.params.user_id
    }, function(err, user) {
      if (err) {
        return next(err);
      }
      res.json(user);
    })
  } else {
    res.status(401);
  }
})

router.post('/', function(req, res, next) {
  let user = new User({
    username: req.body.username,
    email: req.body.email,
    firstname: req.body.firstname,
    surname: req.body.surname,
    dateofbirth: req.body.dateofbirth,
    mobilenumber: req.body.mobilenumber
  })
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    user.save(function(err) {
      if (err) {
        return next(err)
      }
      res.sendStatus(201);
    })
  })
})

module.exports = router