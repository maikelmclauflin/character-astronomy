import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
} from 'js/constants';

export const fetchUser = (username, payload) => ({
  type: FETCH_USER,
  payload,
});

export const fetchUserSuccess = (payload) => ({
  type: FETCH_USER_SUCCESS,
  payload,
});

export const fetchUserFailed = () => ({
  type: FETCH_USER_FAILED,
});