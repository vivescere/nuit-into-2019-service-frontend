import { ACTION_LOGIN } from '../constants';

export const loginAction = (response) => dispatch => {
    dispatch({
        type: ACTION_LOGIN,
        payload: response
    })
}
