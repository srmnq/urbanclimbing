import React from 'react'
import Home from './Home'
import GlobalStyle from './GlobalStyles'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import DetailedSpot from './DetailedSpot'
import spotData from './spots.json'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/detail">
          <DetailedSpot />
          <Link to="/">Home</Link>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/">
          <Home spotData={spotData} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
