import "babel-polyfill"
import {
  App,
} from 'js/component'
import React from 'react'
import ReactDOM from 'react-dom'
import {
  Provider,
} from 'unstated'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
// import {
//   store,
//   history,
// } from 'js/store'
// import {
//   ConnectedRouter as Router,
// } from 'connected-react-router/immutable'

import 'scss/index.scss'
// import 'js/firebase'

render()

function render() {
  const wrapper = document.getElementById('app');
  const fragment = tree()
  return ReactDOM.render(fragment, wrapper);
}

function tree() {
  return (
    <Provider>
      <Router>
        <App />
      </Router>
    </Provider>
  )
}