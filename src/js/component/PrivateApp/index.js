import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import {
  Dashboard,
} from 'js/component'

export const PrivateApp = () => (
  <Switch>
    <Route path="/dashboard/" component={Dashboard} />
  </Switch>
)