import React, { useState, useEffect } from 'react'
import SpotList from './SpotList'
import GlobalStyle from './GlobalStyles'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import DetailedSpot from './DetailedSpot'
import spotData from './spots.json'
import { getCards, patchCard, patchBookmark } from './services'
import WrappedMap from './WrappedMapContainer'

function App() {
  const [spots, setSpots] = useState(spotData)
  const [selectedSpot, setSelectedSpot] = useState(spotData[0])

  useEffect(() => {
    getCards().then(setSpots)
    // console.log(spots)
  }, [])

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
        <Route path="/map">
          <Link to="/">Home</Link>
          <WrappedMap spotData={spots} selectedSpot={selectedSpot} />
        </Route>
      </Switch>
      <Switch>
        <Route path={`/${selectedSpot.name}`}>
          <DetailedSpot
            toggleIsClimbed={index => toggleIsClimbed(index)}
            spot={selectedSpot}
          />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/">
          <SpotList
            clickedSpot={id => clickedSpot(id)}
            spotData={spots}
            toggleBookmark={(event, id) => toggleBookmark(event, id)}
            setLocation={spot => setSelectedSpot(spot)}
          />
        </Route>
      </Switch>
    </Router>
  )

  function toggleBookmark(event, id) {
    event.preventDefault()
    event.stopPropagation()
    let index = spots.findIndex(el => el.id === id)

    let spot = spots[index]
    setSpots([
      ...spots.slice(0, index),
      { ...spot, isBookmarked: !spot.isBookmarked },
      ...spots.slice(index + 1)
    ])
  }

  function toggleIsClimbed(index) {
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

  function clickedSpot(id) {
    const index = spots.findIndex(spot => spot.id === id)
    setSelectedSpot(spots[index])
  }
}

export default App
