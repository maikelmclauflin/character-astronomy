export const LIST_ADD = 'LIST_ADD'
export const listAdd = (options) => ({
    type: LIST_ADD,
    value: options
})

export const LIST_REMOVE = 'LIST_REMOVE'
export const listRemove = (options) => ({
    type: LIST_REMOVE,
    value: options
})