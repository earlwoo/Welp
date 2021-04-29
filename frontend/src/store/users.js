import { csrfFetch } from './csrf';

const SET_USERS = "users/SET_USERS"

const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const getUsers = () => async(dispatch) => {
    const res = await csrfFetch("/api/users")

    if(!res.ok) throw res

    try{
        const users = await res.json()
        return dispatch(setUsers(users))
    } catch (err) {
        console.log(err)
    }
}


const usersReducer = (state = {}, action) => {
    let newState = {};
    switch(action.type) {
        case SET_USERS:
            newState = {...state}
            action.users.forEach(user => {
                newState[user.id] = user
            })
            return newState;
        default:
            return state;
    }
}

export default usersReducer
