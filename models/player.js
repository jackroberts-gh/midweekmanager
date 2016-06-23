var db = require('../db')

var Player = db.model('Player', {
  _userid : { type: db.Schema.Types.ObjectId, ref: 'User' },
  name:     { type: String },
  goals:    { type: Number },
  moms:     { type: Number }
})

module.exports = Player
