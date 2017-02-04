'use strict';

const jwt = require('jsonwebtoken')
const config = require('../config')

const auth = function(req, res, next) {
  if (req.headers['x-auth']) {
    req.auth = jwt.verify(req.headers['x-auth'], config.secret)
  }
  next();
}

module.exports = auth;