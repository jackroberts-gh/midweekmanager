var db = require('../db')

var Team = db.model('Team', {
  name: { type: String, required: true },
  manager: { type: db.Schema.Types.ObjectId, ref: 'User' },
  playday: { type: String, required: true },
  type: { type: String, required: true },
  players: [
    {
      type: db.Schema.Types.ObjectId, ref: 'Player'
    }
  ],
  // seasons:  [
  //             {
  //               type: db.Schema.Types.ObjectId, ref: 'Season'
  //             }
  //           ],
  fixtures: [
    {
      type: db.Schema.Types.ObjectId, ref: 'Fixture'
    }
  ],
  goalsfr: { type: Number },
  goalsag: { type: Number }
})

module.exports = Team
