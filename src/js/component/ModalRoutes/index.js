import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'

export const ModalRoutes = () => (
  <Switch>
    <Route path="*/login" render={() => <div></div>} />
  </Switch>
)
