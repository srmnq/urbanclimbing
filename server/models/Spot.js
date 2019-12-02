const mongoose = require('mongoose')

const spotSchema = {
  name: String
}

module.exports = mongoose.model('Spot', spotSchema)
