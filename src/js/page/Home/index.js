import React, {
  Fragment,
} from 'react'
import {
  Link,
} from 'react-router-dom'
import {
  Content,
  Footer,
  Header,
} from 'js/component'
import {
  Helmet,
} from 'react-helmet'


export const Home = () => (
  <Fragment>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Header />
    <Content />
    <Footer />
  </Fragment>
)
