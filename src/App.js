import React, { useState, useEffect } from 'react'
import SpotList from './SpotList'
import GlobalStyle from './GlobalStyles'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import DetailedSpot from './DetailedSpot'
import spotData from './spots.json'
import { getSpots, patchSpot } from './services'
import WrappedMap from './WrappedMapContainer'

function App() {
  const [spots, setSpots] = useState([])
  const [selectedSpot, setSelectedSpot] = useState(spotData[0])

  useEffect(() => {
    getSpots().then(setSpots)
  }, [])

  // useEffect(() => {
  //   const indexSpot = spots.findIndex(el => el._id === selectedSpot._id)
  //   const spot = selectedSpot
  //   patchSpot({
  //     _id: spot._id
  //   }).then(updatedSpot => {
  //     setSpots([
  //       ...spots.slice(0, indexSpot),
  //       updatedSpot,
  //       ...spots.slice(indexSpot + 1)
  //     ])
  //   })
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [selectedSpot])

  useEffect(() => {
    const indexSpot = spots.findIndex(el => el._id === selectedSpot._id)

    setSpots([
      ...spots.slice(0, indexSpot),
      { ...selectedSpot },
      ...spots.slice(indexSpot + 1)
    ])
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            toggleBookmark={(event, spot) => toggleBookmark(event, spot)}
            setLocation={spot => setSelectedSpot(spot)}
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
      isBookmarked: !spot.isBookmarked
    }).then(updatedSpot => {
      const index = spots.findIndex(el => el._id === updatedSpot._id)
      setSpots([
        ...spots.slice(0, index),
        updatedSpot,
        ...spots.slice(index + 1)
      ])
    })
  }

  // function toggleIsClimbed(index) {
  //   let route = selectedSpot.routes.boulder[index]
  //   const spot = selectedSpot
  //   patchSpot({
  //     _id: spot._id,
  //     routes: {
  //       ...spot.routes,
  //       boulder: [
  //         ...spot.routes.boulder.slice(0, index),
  //         {
  //           ...route,
  //           isClimbed: !route.isClimbed
  //         },
  //         ...spot.routes.boulder.slice(index + 1)
  //       ]
  //     }
  //   }).then(updatedSpot => {
  //     const index = spots.findIndex(el => el._id === updatedSpot._id)
  //     setSpots([
  //       ...spots.slice(0, index),
  //       updatedSpot,
  //       ...spots.slice(index + 1)
  //     ])
  //   })
  //   setSelectedSpot({
  //     ...selectedSpot,
  //     routes: {
  //       ...selectedSpot.routes,
  //       boulder: [
  //         ...selectedSpot.routes.boulder.slice(0, index),
  //         {
  //           ...route,
  //           isClimbed: !route.isClimbed
  //         },
  //         ...selectedSpot.routes.boulder.slice(index + 1)
  //       ]
  //     }
  //   })
  // }

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
    const index = spots.findIndex(spot => spot._id === id)
    setSelectedSpot(spots[index])
  }
}

export default App
