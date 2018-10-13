import {
  createEpicMiddleware,
} from 'redux-observable';

import * as epics from './'

const epicMiddleware = createEpicMiddleware(epics);

export {
  epicMiddleware as epics,
}