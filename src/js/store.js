import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux';
import {
  epicMiddleware,
} from 'js/epics/middleware'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(epicMiddleware)
  )
);

export {
  store,
}