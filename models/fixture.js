var db = require('../db')

var Fixture = db.model('Fixture', {
  _teamid : { type: db.Schema.Types.ObjectId, ref: 'Team' },
  date:                { type: Date },
  opposition:          { type: String },
  teamgoals:           { type: Number },
  oppositiongoals:     { type: Number },
  played:              [Player]
})

module.exports = Fixture
