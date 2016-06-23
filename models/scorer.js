var db = require('../db')

var Scorer = db.model('Fixture', {
  scorer : { type: db.Schema.Types.ObjectId, ref: 'Player' },
  number:  { type: Number },
})

module.exports = Scorer
