import React, { useState, useEffect, useContext } from 'react'

import GlobalStyle from './GlobalStyles'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  __RouterContext,
} from 'react-router-dom'

import { getSpots, patchSpot, postSpot } from './services'

import spotData from './spots.json'
import { animated, useTransition } from 'react-spring'
import Routes from './Routes'

function App() {
  const [spots, setSpots] = useState([])

  useEffect(() => {
    getSpots()
      .then(setSpots)
      .catch(setSpots(spotData))
  }, [])

  // const transitions = useTransition(location, location => location.key, {
  //   from: { transform: 'translate3d(100%,0,0)' },
  //   enter: { transform: 'translate3d(0,0,0)' },
  //   leave: { transform: 'translate3d(100%,0,0)' },
  // })

  const CurrentRoute = React.createContext({ path: '/' })

  return (
    <Router>
      <GlobalStyle />
      <Routes spots={spots} setSpots={setSpots} />
    </Router>
  )

  // function useRouter() {
  //   const path = useContext(CurrentRoute)
  //   console.log(path)
  //   console.log(__RouterContext)
  // }
}

export default App
