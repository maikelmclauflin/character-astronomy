import {
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
} from 'js/constants'

const initialState = {}

export const user = (state = initialState, {
  payload,
  type,
}) => {
  switch (type) {
    case FETCH_USER_SUCCESS:
      return payload
    case FETCH_USER_FAILED:
      return {}
    default:
      return state
  }
}
