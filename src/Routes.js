import React, { useContext } from 'react'
import { Switch, Route, __RouterContext } from 'react-router-dom'
import WrappedMap from './Map/WrappedMapContainer'
import AddASpot from './AddASpot/AddASpot'
import Profile from './Profile'
import DetailedSpot from './DetailedSpot/DetailedSpot'
import Spotlist from './Spotlist/SpotList'
import { patchSpot, postSpot } from './services'
import { animated, useTransition } from 'react-spring'

export default function Routes({ spots, setSpots }) {
  const { location } = useRouter()
  console.log(location)

  const transitions = useTransition(location, location => location.key, {
    from: { transform: 'translate3d(100%,0,0)' },
    enter: { transform: 'translate3d(0,0,0)' },
    leave: { transform: 'translate3d(100%,0,0)' },
  })

  return transitions.map(({ item, key, props }) => (
    <animated.div key={key} style={props}>
      <Switch location={location}>
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

        <Route exact path={`/spot/:id`}>
          <DetailedSpot
            toggleIsClimbed={(index, type, spot) =>
              toggleIsClimbed(index, type, spot)
            }
            spots={spots}
            toggleBookmark={(event, spot) => toggleBookmark(event, spot)}
          />
        </Route>
        <Route exact path="/">
          <Spotlist spotData={spots} toggleBookmark={toggleBookmark} />
        </Route>
      </Switch>
    </animated.div>
  ))

  function useRouter() {
    return useContext(__RouterContext)
  }
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
