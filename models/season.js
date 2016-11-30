var db = require('../db')

var Season = db.model('Season', {
  name:     { type: String, required: true },
  fixtures:  [
              {
                type: db.Schema.Types.ObjectId, ref: 'Fixture'
              }
            ]
})

module.exports = Season
