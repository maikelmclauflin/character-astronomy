export const LIST_ADD = 'LIST_ADD'
export const listAdd = (options) => {
    return (dispatch, getState) => new Promise((resolve, reject) => {
        dispatch({
            type: LIST_ADD,
            value: options
        });
        resolve(options);
    });
}

export const LIST_REMOVE = 'LIST_REMOVE'
export const listRemove = (options) => {
    return (dispatch, getState) => new Promise((resolve, reject) => {
        dispatch({
            type: LIST_REMOVE,
            value: options
        });
        resolve(options);
    });
}