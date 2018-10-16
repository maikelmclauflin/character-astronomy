import React, {
  Component,
  Fragment,
} from 'react'
import {
  Content,
  Footer,
  Header,
} from 'js/component'

class UnstyledApp extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Content />
        <Footer />
      </Fragment>
    )
  }
}

const App = UnstyledApp

export {
  App,
}
