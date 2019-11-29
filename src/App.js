import React, { useState, useEffect } from 'react'
import SpotList from './SpotList'
import GlobalStyle from './GlobalStyles'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import DetailedSpot from './DetailedSpot'
import spotData from './spots.json'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
import Map from './Map'

function App() {
  const WrappedMap = withScriptjs(withGoogleMap(Map))
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
        <Route path="/maps">
          <Link to="/">Home</Link>
          <div style={{ height: '100vh', width: '100vw' }}>
            <WrappedMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCIuPvieSfpTsEcZonhS4x3OdIsee4IIqA
              &q=Hamburg"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </Route>
      </Switch>
      <Switch>
        {/* <Route path="/:handle"> */}
        <Route path={`/${selectedSpot.name}`}>
          <DetailedSpot
            toggleIsClimbed={index => toggleIsClimbed(index)}
            spot={selectedSpot}
          />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/">
          <Link to="/maps">Map </Link>
          <SpotList
            clickedSpot={id => clickedSpot(id)}
            spotData={spots}
            toggleBookmark={(event, id) => toggleBookmark(event, id)}
          />
        </Route>
      </Switch>
    </Router>
  )

  function toggleBookmark(event, id) {
    event.preventDefault()
    event.stopPropagation()
    let index = spots.findIndex(el => el.id == id)

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
    const index = spots.findIndex(spot => spot.id == id)
    setSelectedSpot(spots[index])
  }
}

export default App
