import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Components
const Home = lazy(() => import('./Home'))
const Stack = lazy(() => import('./Stack'))
const NotFound = lazy(() => import('./NotFound'))

export default function Main() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:stackID" component={Stack} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  )
}
