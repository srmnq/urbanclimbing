import React, { useState, useEffect } from 'react'

import GlobalStyle from './GlobalStyles'
import { BrowserRouter as Router } from 'react-router-dom'

import { getSpots } from './services'

import spotData from './spots.json'

import Routes from './Routes'

function App() {
  const [spots, setSpots] = useState([])

  useEffect(() => {
    getSpots()
      .then(setSpots)
      .catch(setSpots(spotData))
  }, [])

  return (
    <Router>
      <GlobalStyle />
      <Routes spots={spots} setSpots={setSpots} />
    </Router>
  )
}

export default App
