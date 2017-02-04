'use strict';

const db = require('../db')

const Season = db.model('Season', {
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  fixtures: [{
    type: db.Schema.Types.ObjectId,
    ref: 'Fixture'
  }]
})

module.exports = Season