const express = require('express')
const Spot = require('./models/Spot')
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3333
app.listen(PORT, () => console.log(`Express ready on ${PORT}`))

app.get('.spots', (req, res) => {
  Spot.find()
    .then(spots => res.json(spots))
    .catch(err => res.json(err))
})

app.get('.spots/:id', (req, res) => {
  Spot.findById(req.params.id)
    .then(spot => res.json(spot))
    .catch(err => res.json(err))
})

app.post('.spots', (req, res) => {
  Spot.create(req.body)
    .then(spot => res.json(spot))
    .catch(err => res.json(err))
})

app.patch('.spots/:id', (req, res) => {
  Spot.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(spot => res.json(spot))
    .catch(err => res.json(err))
})
