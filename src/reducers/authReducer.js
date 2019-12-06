import { ACTION_LOGIN, ACTION_LOGOUT } from '../constants';

export default (state = {}, action) => {
    switch (action.type) {
        case ACTION_LOGIN:
            return actionLogin(state, action.payload);
        case ACTION_LOGOUT:
            return actionLogout(state, action.payload);
        default:
            return state
    }
}

function actionLogin(state, token) {
    localStorage.setItem('token', token);
    return Object.assign({}, state, { connected: true, token });
}

function actionLogout(state) {
    return Object.assign({}, state, {connected: false, token: null});
}
