import React from 'react'
import {
  Link,
} from 'react-router-dom'
import {
  Jumbotron,
  Button,
  Container,
} from 'reactstrap';

export const Home = () => (
  <Jumbotron fluid>
    <Container fluid>
      <h1 className="display-3">Character Astronomy</h1>
      <p className="lead">An app to take your time with words.</p>
      <p className="lead">
        <Link to="/technology/">
          <Button color="primary">Learn More</Button>
        </Link>
      </p>
    </Container>
  </Jumbotron>
)
