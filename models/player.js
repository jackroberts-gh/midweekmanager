'use strict';

const db = require('../db')

const Player = db.model('Player', {
  _userid: { type: db.Schema.Types.ObjectId, ref: 'User' },
  firstname: { type: String },
  surname: { type: String },
  position: { type: String },
  goals: { type: Number, default: 0 },
  moms: { type: Number, default: 0 }
})

module.exports = Player
