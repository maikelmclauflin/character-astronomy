import {
    LIST_ADD,
    LIST_REMOVE
} from '../actions'
export {
    list
}

function list(state = [], {
    type,
    value
}) {
    let index = null;
    if (type === LIST_ADD) {
        state = state.concat([value]);
    } else if (type === LIST_REMOVE) {
        return listRemove(state.slice(0), value);
    }
    return state;
}

function listRemove(list, target) {
    const index = list.findIndex(function (item) {
        return item.value === target.value;
    });
    if (index >= 0) {
        list.splice(index, 1);
    }
    return list;
}