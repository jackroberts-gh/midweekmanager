'use strict';
let router = require('express').Router()
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')
let config = require('../../config')
let User = require('../../models/user')

// \\ ** SESSIONS API ENDPOINT ** \\ //

router.post('/', function (req, res, next) {
  let username = req.body.username
  User.findOne({ username: username })
    .select('password')
    .exec(function (err, user) {
      if (err) { return next(err) }
      if (!user) { return res.sendStatus(401) }
      bcrypt.compare(req.body.password, user.password, function (err, valid) {
        if (err) { return next(err) }
        if (!valid) { return res.sendStatus(401) }
        let jsonToken = { username: username }
        let token = jwt.sign(jsonToken, config.secret, { expiresIn: '1440m' })
        res.send(token)
      })
    })
})

module.exports = router
