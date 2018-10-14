import {
  combineEpics,
} from 'redux-observable'
import {
  fetchUser,
} from 'js/epics/user'

export default combineEpics(
  fetchUser,
)