var db = require('../db')

var SelectedPlayer = new db.Schema({
  _playerid: { type: db.Schema.Types.ObjectId, ref: 'Player' },
  goals: { type: Number },
  moms:  { type: Number },
  in:    { type: Boolean }
});

var Fixture = db.model('Fixture', {
  opposition:          { type: String, required: true },
  fixturedate:         { type: Date, required: true },
  goalsfor:            { type: Number },
  goalsagainst:        { type: Number },
  played:              { type: [SelectedPlayer] }
})

module.exports = Fixture
