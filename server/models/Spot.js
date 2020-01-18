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
        routeImage: String,
        coordinates: Object
      }
    ],
    sport: [
      {
        routeName: String,
        difficulty: String,
        isClimbed: Boolean,
        description: String,
        routeImage: String,
        coordinates: Object
      }
    ]
  },
  boulderCount: Number,
  location: Array,
  mainImage: String,
  isBookmarked: Boolean
}

module.exports = mongoose.model('Spot', spotSchema)
