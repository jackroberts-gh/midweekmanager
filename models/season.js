'use strict';

const db = require('../db')

const Season = db.model('Season', {
  name: { type: String, required: true },
  fixtures: [
    {
      type: db.Schema.Types.ObjectId, ref: 'Fixture'
    }
  ]
})

module.exports = Season
