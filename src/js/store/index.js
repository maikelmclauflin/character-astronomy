import { createStore } from 'redux'
import combined from '../reducers/combined'
const store = createStore(combined);
export default store