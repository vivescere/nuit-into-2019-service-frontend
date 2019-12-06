import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export default function configureStore() {
    return createStore(
        rootReducer,
        {
            authReducer: {connected: localStorage.getItem('token') !== null, token: localStorage.getItem('token')}
        },
        applyMiddleware(thunk)
    );
}
