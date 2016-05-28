var mongoose = require('mongoose')
var mongodbUri = process.env.MONGO_URI;

mongoose.connect(mongodbUri, function () {
  console.log('mongodb connected')
})

module.exports = mongoose
