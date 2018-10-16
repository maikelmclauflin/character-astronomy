import {
  connect,
} from 'react-redux'
import {
  compose,
} from 'redux'
import {
  createStructuredSelector,
} from 'reselect'
import {
  makeSelectRoutes,
} from 'js/selectors'
import {
  withRouter,
} from 'react-router-dom'

const mapStateToProps = createStructuredSelector({
  routes: makeSelectRoutes(),
})

const withConnect = connect(mapStateToProps)
export default compose(
  withConnect,
  withRouter,
)
