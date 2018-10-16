import React from 'react'
import { Subscribe } from 'unstated'
import {
  any,
  object,
} from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { omit } from 'lodash'
import {
  UserSubscribe,
} from 'js/container'

const PrivateRoute = props => {
  const {
    component: Component,
    location,
  } = props
  console.log('rendering private')
  return (
    <UserSubscribe>
      {(user) => (
      <Route
        {...omit(props, ['component', 'ref', 'location'])}
        render={props =>
          user.state.get('email') ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                ...location,
                pathname: '/login',
                state: {
                  prev: location,
                },
              }}
            />
          )
        }
      />
      )}
    </UserSubscribe>
  )
}

PrivateRoute.propTypes = {
  component: any.isRequired,
  email: object,
  user: object,
  location: object,
}

export {
  PrivateRoute,
}