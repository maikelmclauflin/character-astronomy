import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux';
import reducers from 'js/reducers'
import epics from 'js/epics'
import epicMiddleware from 'js/epics/middleware'

const devtoolsCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const composeEnhancers = devtoolsCompose || compose

export default () => {
  const store = createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(epicMiddleware)
    )
  )
  epicMiddleware.run(epics)
  return store
}