import React, { useState, useEffect } from 'react'
import WrappedMap from './Map/WrappedMapContainer'
import AddASpot from './AddASpot/AddASpot'
import Profile from './Profile'
import GlobalStyle from './GlobalStyles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { getSpots, postSpot, patchSpot } from './services'
import spotData from './spots.json'
import { LastLocationProvider } from 'react-router-last-location'
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
      <LastLocationProvider>
        <GlobalStyle />
        <Switch>
          <Route exact path={`/map/:id`}>
            <WrappedMap spotData={spots} />
          </Route>
          <Route exact path="/addASpot">
            <AddASpot addASpot={spot => addASpot(spot)} />
          </Route>
          <Route exact path="/Profile">
            <Profile spots={spots} />
          </Route>
          <Route exact path="/map">
            <WrappedMap spotData={spots} />
          </Route>
        </Switch>
        <Routes spots={spots} setSpots={setSpots} />
      </LastLocationProvider>
    </Router>
  )
  function addASpot(spot) {
    postSpot(spot)
  }
}

export default App
