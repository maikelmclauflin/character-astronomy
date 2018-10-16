import {
  createSelector,
} from 'reselect'
import config from 'config'
export const selectConfigRoutes = () => config.routes

export const makeSelectRoutes = (match) => createSelector(
  selectConfigRoutes(),
  (routes) => {
    console.log(routes)
    return routes
  }
)
