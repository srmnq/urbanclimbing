const mongoose = require('mongoose')

const spotSchema = {
  name: String,
  routes: Object,
  boulderCount: Number,
  location: Array,
  mainImage: String,
  isBookmarked: Boolean,
  id: Number
}

module.exports = mongoose.model('Spot', spotSchema)
