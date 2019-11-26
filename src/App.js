import React, { useState } from 'react'
import Home from './Home'
import GlobalStyle from './GlobalStyles'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import DetailedSpot from './DetailedSpot'
import spotData from './spots.json'

function App() {
  const [selectedCard, setSelectedCard] = useState(spotData[0])
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/:handle">
          <DetailedSpot spot={selectedCard} />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/">
          <Home clickedSpot={index => clickedSpot(index)} spotData={spotData} />
        </Route>
      </Switch>
    </Router>
  )

  function clickedSpot(index) {
    setSelectedCard(spotData[index])
  }
}

export default App
