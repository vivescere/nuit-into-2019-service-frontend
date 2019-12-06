import { ACTION_LOGIN } from '../constants';

export default (state = {}, action) => {
    switch (action.type) {
        case ACTION_LOGIN:
            return actionLogin(state, action.payload);
        default:
            return state
    }
}

function actionLogin(state, token) {
    localStorage.setItem('token', token);
    return Object.assign({}, state, { connected: true, token });
}
