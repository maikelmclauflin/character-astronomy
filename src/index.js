import App from 'js/components/App'
import React from 'react'
import ReactDOM from 'react-dom'
import {
  Provider,
} from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import configureStore from 'js/store'

import 'scss/index.scss'
import 'js/firebase'

render()

function render() {
  const wrapper = document.getElementById('app');
  const store = configureStore()
  const fragment = tree(store)
  return ReactDOM.render(fragment, wrapper);
}

function tree(store) {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  )
}