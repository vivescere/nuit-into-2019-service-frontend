import { ACTION_LOGIN, ACTION_LOGOUT } from '../constants';

export const loginAction = (response) => dispatch => {
    dispatch({
        type: ACTION_LOGIN,
        payload: response
    })
}

export const logoutAction = () => dispatch => {
    dispatch({
        type: ACTION_LOGOUT,
        payload: null
    })
}
