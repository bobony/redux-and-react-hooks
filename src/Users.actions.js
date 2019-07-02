import 'whatwg-fetch'
const ROOT_URL = 'https://api.github.com/'

export function getUsers(params) {
    const config = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }
    return function (dispatch) {
        fetch(ROOT_URL + `search/users?q=${params}`, config)
            .then(function (response) {
                return response.json()
            })
            .then(response => {
                dispatch({
                    type: 'GET_USERS',
                    payload: response.items
                })
            })
            .catch(response => dispatch(getUsersError(response)))
    }
}

export function getUsersError(error) {
    return {
        type: 'GET_USERS_ERROR',
        payload: error
    }
}