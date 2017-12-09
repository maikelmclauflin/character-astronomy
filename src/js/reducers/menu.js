import {
    MENU_TITLE_UPDATE
} from '../actions'
export {
    menu
}

function menu(state = {
    title: 'It Works!'
}, action) {
    if (action.type === MENU_TITLE_UPDATE) {
        state.title = action.value;
    }
    return state;
}