import 'rxjs';
import {
  FETCH_USER,
} from 'js/constants'
import {
  fetchUserSuccess,
  fetchUserFailed,
} from 'js/actions'
import {
  Observable,
} from 'rxjs'
import {
  mergeMap,
} from 'rxjs/operators'

export const fetchUser = (actions$) => {
  return actions$.ofType(FETCH_USER).pipe(
    mergeMap(() => {
      return Promise.resolve({type: 'here'})
      // const url = `https://api.github.com/users/${payload.username}`
      // return Observable.ajax.getJSON(url)
      //   .map(user => fetchUserSuccess(user))
      //   .takeUntil(actions$.ofType(FETCH_USER))
      //   .retry(2)
      //   .catch(error => Observable.of(fetchUserFailed()))
    })
  )
}
