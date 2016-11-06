var db = require('../db')

var SelectedPlayer = new db.Schema({
  _playerid: { type: db.Schema.Types.ObjectId, ref: 'Player' },
  goals: { type: Number },
  mom:  { type: Boolean },
  in:    { type: Boolean }
});

var Fixture = db.model('Fixture', {
  opposition:          { type: String, required: true },
  fixturedate:         { type: Date, required: true },
  goalsfor:            { type: Number, default: 0 },
  goalsagainst:        { type: Number, default: 0 },
  result:              { type: Boolean, default: false },
  played:              { type: [SelectedPlayer] }
})

module.exports = Fixture
