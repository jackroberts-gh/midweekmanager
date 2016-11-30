var mongoose = require('mongoose')
var mongouri = process.env.DB;

mongoose.connect(mongouri, function () {
  console.log('mongodb connected')
})

module.exports = mongoose
