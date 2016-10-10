var db = require('../db')

var SelectedPlayer = new db.Schema({
  _playerid: { type: db.Schema.Types.ObjectId, ref: 'Player' },
  goals: { type: Number },
  moms:  { type: Number },
  in:    { type: Boolean }
});

var Fixture = db.model('Fixture', {
  date:                { type: Date, required: true, default:Date.now },
  opposition:          { type: String, required: true },
  goalsfor:            { type: Number },
  goalsagainst:        { type: Number },
  played:              { type: [SelectedPlayer] }
})

module.exports = Fixture
