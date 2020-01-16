const express = require('express')
const Spot = require('./models/Spot')
const mongoose = require('mongoose')
const path = require('path')

const {
  MONGODB_URI = 'mongodb://localhost:27017/urbanclimbing',
  PORT = 3333
} = process.env

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, '../build')))

app.listen(PORT, () => console.log(`Express ready on ${PORT}`))

app.get('/spots', (req, res) => {
  Spot.find()
    .then(spots => res.json(spots))
    .catch(err => res.json(err))
})

app.get('/spots/:id', (req, res) => {
  Spot.findById(req.params.id)
    .then(spot => res.json(spot))
    .catch(err => res.json(err))
})

app.post('/spots', (req, res) => {
  Spot.create(req.body)
    .then(spot => res.json(spot))
    .catch(err => res.json(err))
})

app.patch('/spots/:id', (req, res) => {
  Spot.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(spot => res.json(spot))
    .catch(err => res.json(err))
})

app.get('*', (req, res) => {
  res.render(path.join(__dirname, '/build/index.html'))
})
