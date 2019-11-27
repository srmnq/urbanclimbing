import React, { useState } from 'react'
import SpotList from './SpotList'
import GlobalStyle from './GlobalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DetailedSpot from './DetailedSpot'
import spotData from './spots.json'
import { func } from 'prop-types'

function App() {
  const [selectedSpot, setSelectedSpot] = useState(spotData[0])
  const [spots, setSpots] = useState(spotData)
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/:handle">
          <DetailedSpot spot={selectedSpot} />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/">
          <SpotList
            clickedSpot={index => clickedSpot(index)}
            spotData={spots}
            toggleBookmark={(event, index) => toggleBookmark(event, index)}
          />
        </Route>
      </Switch>
    </Router>
  )

  function toggleBookmark(event, index) {
    event.preventDefault()
    event.stopPropagation()
    let spot = spots[index]
    setSpots([
      ...spots.slice(0, index),
      { ...spot, isBookmarked: !spot.isBookmarked },
      ...spots.slice(index + 1)
    ])
  }
  function clickedSpot(index) {
    setSelectedSpot(spotData[index])
  }
}

export default App
