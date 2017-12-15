import { LIST_ADD, LIST_REMOVE } from '../actions'
import { List } from 'immutable'
export { list }

function list(state = List(), {
        type,
        value
    }) {
    if (type === LIST_ADD) {
        return state.push(value);
    } else if (type === LIST_REMOVE) {
        return listRemove(state, value);
    }
    return state;
}

function listRemove(list, target) {
    const index = list.findIndex(function (item) {
        return item.value === target.value;
    });
    if (index >= 0) {
        return list.splice(index, 1);
    }
    return list;
}