const express = require('express')
const Spot = require('./models/Spot')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/urbanclimbing', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3333
app.listen(PORT, () => console.log(`Express ready on ${PORT}`))

app.get('/spots', (req, res) => {
  Spot.find()
    .then(spots => res.json(spots))
    .catch(err => res.json(err))
})

// app.delete('/cards/:id', (req, res) => {
//     Card.findByIdAndDelete(req.params.id)
//       .then(card => res.json(card))
//       .catch(err => res.json(err))
//   })

app.get('/spots/:id', (req, res) => {
  Spot.findById(req.params.id)
    .then(spot => res.json(spot))
    .catch(err => res.json(err))
})

//   app.post('/cards', (req, res) => {
//     Card.create(req.body)
//       .then(card => res.json(card))
//       .catch(err => res.json(err))
//   })

//   app.patch('/cards/:id', (req, res) => {
//     Card.findByIdAndUpdate(req.params.id, req.body, { new: true })
//       .then(card => res.json(card))
//       .catch(err => res.json(err))
//   })
