import React from 'react'
import Home from './Home'
import GlobalStyle from './GlobalStyles'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import DetailedRoute from './DetailedRoute'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/detail">
          <DetailedRoute />
          <Link to="/">Home</Link>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
