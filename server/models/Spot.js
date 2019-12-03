const mongoose = require('mongoose')

const spotSchema = {
  name: String,
  routes: {
    boulder: [
      {
        routeName: String,
        difficulty: String,
        isClimbed: Boolean,
        description: String,
        routeImage: String
      }
    ],
    sport: [
      {
        routeName: String,
        difficulty: String,
        isClimbed: Boolean,
        description: String,
        routeImage: String
      }
    ]
  },
  boulderCount: Number,
  location: Array,
  mainImage: String,
  isBookmarked: Boolean,
  id: Number
}

module.exports = mongoose.model('Spot', spotSchema)
