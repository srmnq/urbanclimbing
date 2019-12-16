import React, { useState, useEffect } from 'react'
import SpotList from './Spotlist/SpotList'
import GlobalStyle from './GlobalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DetailedSpot from './DetailedSpot/DetailedSpot'
import { getSpots, patchSpot, postSpot } from './services'
import WrappedMap from './Map/WrappedMapContainer'
import AddASpot from './AddASpot/AddASpot'
import Profile from './Profile'
import spotData from './spots.json'

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
      <Switch>
        <Route exact path={`/map/:id`}>
          <WrappedMap spotData={spots} />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/addASpot">
          <AddASpot addASpot={spot => addASpot(spot)} />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/Profile">
          <Profile spots={spots} />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/map">
          <WrappedMap spotData={spots} />
        </Route>
      </Switch>
      <Switch>
        <Route exact path={`/spot/:id`}>
          <DetailedSpot
            toggleIsClimbed={(index, type, spot) =>
              toggleIsClimbed(index, type, spot)
            }
            spots={spots}
            toggleBookmark={(event, spot) => toggleBookmark(event, spot)}
          />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/">
          <SpotList
            spotData={spots}
            toggleBookmark={(event, spot) => toggleBookmark(event, spot)}
          />
        </Route>
      </Switch>
    </Router>
  )

  function toggleBookmark(event, spot) {
    event.preventDefault()
    event.stopPropagation()
    patchSpot({
      _id: spot._id,
      isBookmarked: !spot.isBookmarked,
    }).then(updatedSpot => {
      const index = spots.findIndex(el => el._id === updatedSpot._id)
      setSpots([
        ...spots.slice(0, index),
        updatedSpot,
        ...spots.slice(index + 1),
      ])
    })
  }

  function toggleIsClimbed(index, type, spot) {
    let route = spot.routes[type][index]

    patchSpot({
      _id: spot._id,
      routes: {
        ...spot.routes,
        [type]: [
          ...spot.routes[type].slice(0, index),
          {
            ...route,
            isClimbed: !route.isClimbed,
          },
          ...spot.routes[type].slice(index + 1),
        ],
      },
    }).then(updatedSpot => {
      const index = spots.findIndex(el => el._id === updatedSpot._id)
      setSpots([
        ...spots.slice(0, index),
        updatedSpot,
        ...spots.slice(index + 1),
      ])
    })
  }

  function addASpot(spot) {
    postSpot(spot)
  }
}

export default App
