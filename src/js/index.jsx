import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {
    Provider
} from 'react-redux'
import {
    App
} from './containers'
import store from './store'
// load css
require('../css/index.css');
// load json
var data = require('../json/index.json');
// start js
var app = (<Provider store={store}>
    <App/>
</Provider>);
var root = document.getElementById('app');
ReactDOM.render(app, root);