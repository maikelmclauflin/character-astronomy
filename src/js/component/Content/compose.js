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
  makeSelectPath,
} from 'js/selectors'
import {
  withRouter,
} from 'react-router-dom'

const mapStateToProps = createStructuredSelector({
  path: makeSelectPath(),
})

const withConnect = connect(mapStateToProps)
export default compose(
  withRouter,
  withConnect,
)
