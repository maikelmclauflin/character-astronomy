import React from 'react'
import {
  Map,
} from 'immutable'
import {
  Container,
  Subscribe,
  Provider,
} from 'unstated'

export class UserContainer extends Container {
  constructor(props) {
    super(props)
    this.state = Map(props)
  }
  login = async () => {
    console.log('loggin in')
  }
  logout = async () => {
    console.log('logging out')
  }
}


// Following the Singleton Service pattern (think Angular Service),
// we will instantiate the Container from within this module
const User = new UserContainer()

// Then we will wrap the provider and subscriber inside of functional
// React components. This simplifies the resuse of the module as we
// will be able to import this module as a depenency without having
// to import Unstated and/or create React Contexts  manually in the
// places that we want to Provide/Subscribe to the API Service.
// We leave the injector flexible, so you can inject a new dependency
// at any time, eg: snapshot testing
export const UserProvider = (props) => (
  <Provider inject={props.inject || [User]}>
    {props.children}
  </Provider>
)

// We also leave the subscribe "to" flexible, so you can have full
// control over your subscripton from outside of the module
export const UserSubscribe = (props) => (
  <Subscribe to={props.to || [User]}>
    {props.children}
  </Subscribe>
)

