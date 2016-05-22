var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/midweekmanager', function () {
  console.log('mongodb connected')
})
module.exports = mongoose
