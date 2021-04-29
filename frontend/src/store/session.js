// frontend/src/store/session.js
import { csrfFetch } from './csrf';

const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';

const setUser = (user) => {
    return {
        type: SET_USER,
        user,
    };
};

const removeUser = () => {
    return {
        type: REMOVE_USER,
    };
};

export const login = ({ credential, password }) => async (dispatch) => {
    const response = await csrfFetch('/api/session/login', {
        method: 'POST',
        body: JSON.stringify({
            credential,
            password,
        }),
    });
    const data = await response.json();
    return dispatch(setUser(data.user));

};

export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

export const signup = (user) => async (dispatch) => {
    const { firstName, lastName, username, email, password } = user;
    const response = await csrfFetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
            username,
            email,
            password,
            firstName,
            lastName
        }),
    });
    const data = await response.json();
    return dispatch(setUser(data.user));

};

export const logout = () => async (dispatch) => {
    const response = await csrfFetch('/api/session/logout', {
      method: 'DELETE',
    });
    dispatch(removeUser());
    return response;

  };


const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state);
            newState.user = action.user;
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;
