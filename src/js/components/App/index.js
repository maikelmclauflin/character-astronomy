
import React, {
  Component,
  Fragment,
} from 'react'
import {
  ReactDOM,
} from 'react-dom'
import {
  Route,
  Switch,
} from 'react-router-dom'
import {
  Header,
} from 'js/components/container'
import {
  Contact,
  Home,
  Status404,
  Tech,
  About,
  Services,
  App,
} from 'js/components/pages'

class Application extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/contact/" component={Contact} />
          <Route exact path="/technology/" component={Tech} />
          <Route exact path="/services/" component={Services} />
          <Route exact path="/about/" component={About} />
          <Route exact path="/app/" component={App} />
          <Route exact path="/" component={Home} />
          <Route component={Status404} />
        </Switch>
      </Fragment>
    )
  }
}
export default Application