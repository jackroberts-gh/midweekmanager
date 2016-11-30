var db = require('../db')

var User = db.model('User', {
  username:     { type: String, required: true, index: {unique: true, dropDups: true} },
  email:        { type: String, required: true, index: {unique: true, dropDups: true} },
  firstname:    { type: String, required: true },
  surname:      { type: String, required: true },
  dateofbirth:  { type: Date, required: true },
  mobilenumber: { type: Number, required: true, index: {unique: true, dropDups: true} },
  password:     { type: String, required: true, select: false }
})

module.exports = User
