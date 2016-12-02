(function(){
  'use strict';

  var jwt    = require('jsonwebtoken')
  var config = require('../config')

  let auth = function (req, res, next) {
    if (req.headers['x-auth']) {
      req.auth = jwt.verify(req.headers['x-auth'], config.secret)
    }
    next();
  }
  module.exports = auth;
})();
