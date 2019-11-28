import React, { useState, useEffect } from 'react'
import SpotList from './SpotList'
import GlobalStyle from './GlobalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DetailedSpot from './DetailedSpot'
import spotData from './spots.json'
import { func } from 'prop-types'

function App() {
  const [spots, setSpots] = useState(spotData)
  const [selectedSpot, setSelectedSpot] = useState(spots[0])

  useEffect(() => {
    const indexSpot = spots.findIndex(el => el.id === selectedSpot.id)

    setSpots([
      ...spots.slice(0, indexSpot),
      { ...selectedSpot },
      ...spots.slice(indexSpot + 1)
    ])
  }, [selectedSpot])
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/:handle">
          <DetailedSpot
            toggleClimbed={index => toggleClimbed(index)}
            spot={selectedSpot}
          />
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

  function toggleClimbed(index) {
    let route = selectedSpot.routes.boulder[index]

    setSelectedSpot({
      ...selectedSpot,
      routes: {
        ...selectedSpot.routes,
        boulder: [
          ...selectedSpot.routes.boulder.slice(0, index),
          {
            ...route,
            isClimbed: !route.isClimbed
          },
          ...selectedSpot.routes.boulder.slice(index + 1)
        ]
      }
    })
  }

  function clickedSpot(index) {
    setSelectedSpot(spots[index])
  }
}

export default App
