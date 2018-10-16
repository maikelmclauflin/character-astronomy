import React, {
  Fragment,
} from 'react'
// import {
//   Jumbotron,
//   Container,
//   Button,
// } from 'reactstrap'
import {
  Container,
} from 'js/component'
import {
  Link
} from 'react-router-dom'

export const Status404 = (props) => (
  <Fragment>
    <h1>Uh oh!</h1>
    <p>We couldn't find that page</p>
    <Button onClick={() => {
      try {
        props.history.goBack()
      } catch (e) {
        props.history.go('/')
      }
    }}>Go Back</Button>
  </Fragment>
)