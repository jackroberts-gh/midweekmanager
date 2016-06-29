var db = require('../db')

var user = db.Schema({
  username:     { type: String, required: true },
  email:        { type: String, required: true },
  firstname:    { type: String, required: true },
  surname:      { type: String, required: true },
  dateofbirth:  { type: Date, required: true },
  password:     { type: String, required: true, select: false }
})
module.exports = db.model('User', user)
