import React, {
  Fragment,
} from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import {
  Helmet,
} from 'react-helmet'
import {
  ModalRoutes,
  PrivateRoute,
  PrivateApp,
  PublicApp,
} from 'js/component'
import {
  siteName,
} from 'config'

export const App = () => (
  <Fragment>

    <Helmet
      defaultTitle={siteName}
      titleTemplate={`${siteName} - %s`}
    />
    <Switch>
      <PrivateRoute path="/app/" component={PrivateApp} />
      <Route component={PublicApp} />
    </Switch>
  </Fragment>
)
