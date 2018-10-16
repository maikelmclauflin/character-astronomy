import React from 'react'
import {
  Contact,
  Tech,
  Services,
  About,
  Home,
  Status404,
} from 'js/page'
import {
  Switch,
  Route,
} from 'react-router-dom'

export const PublicApp = () => (
  <Switch>
    <Route path="/contact/" component={Contact} />
    <Route path="/technology/" component={Tech} />
    <Route path="/services/" component={Services} />
    <Route path="/about/" component={About} />
    <Route path="/" component={Home} />
    <Route component={Status404} />
  </Switch>
)