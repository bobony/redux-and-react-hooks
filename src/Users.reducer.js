export default function (state = {}, action) {
    switch (action.type) {
        case 'GET_USERS':
            return { ...state, data: action.payload }
        case 'GET_USERS_ERROR':
            return { ...state, error: action.payload }
        default:
            return state
    }
}