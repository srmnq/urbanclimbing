import React, { useState, useEffect } from 'react'
import { Switch, Route, useLocation, useHistory } from 'react-router-dom'
import { withRouter } from 'react-router'
import DetailedSpot from './DetailedSpot/DetailedSpot'
import { createBrowserHistory } from 'history'
import Spotlist from './Spotlist/SpotList'
import { useLastLocation } from 'react-router-last-location'

import { patchSpot } from './services'
import { animated, useTransition } from 'react-spring'

export default function Routes({ spots, setSpots }) {
  const location = useLocation()

  const lastLocation = useLastLocation() || { pathname: '/' }

  console.log(lastLocation)
  const x = location.pathname === '/' ? -100 : 100
  const y = location.pathname === '/' ? 100 : -100

  const transitionsleft = useTransition(location, location => location.key, {
    from: { transform: `translatex(${x}%)` },
    enter: { transform: 'translatex(0)' },
    leave: { transform: `translatex(${y}%)` },
  })
  const conditions = ['Profile', 'map', 'add']

  return (
    <>
      {conditions.some(el => lastLocation.pathname.includes(el)) ? (
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
          <Route exact path="/">
            <Spotlist spotData={spots} toggleBookmark={toggleBookmark} />
          </Route>
        </Switch>
      ) : (
        transitionsleft.map(({ item, key, props }) => (
          <animated.div
            key={key}
            style={{
              ...props,
              position: 'absolute',
              width: '100vw',
            }}
          >
            <Switch location={item}>
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
      )}
    </>
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
}
