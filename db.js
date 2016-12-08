'use strict';
const mongoose = require('mongoose')
const mongouri = process.env.DB;

mongoose.connect(mongouri, function () {
  console.log('mongodb connected')
})

module.exports = mongoose
