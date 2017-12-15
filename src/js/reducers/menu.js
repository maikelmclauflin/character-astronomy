import { MENU_TITLE_UPDATE } from '../actions'
export { menu }
import { Map } from 'immutable'

function menu(state = Map({
        title: 'It Works!'
    }), action) {
    if (action.type === MENU_TITLE_UPDATE) {
        return state.set('title', action.value);
    }
    return state;
}