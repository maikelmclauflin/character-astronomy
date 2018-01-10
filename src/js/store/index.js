import {
    createStore,
    applyMiddleware
} from 'redux'
import combined from '../reducers/combined'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

const store = createStore(combined, applyMiddleware(
    thunk,
    promise()
));
export default store