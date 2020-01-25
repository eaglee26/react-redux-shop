import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import reducer from './reducers';


const logMiddleware = ({ getState }) => (next) => (action) => {
    console.log(action.type, getState());
    return next(action);
};

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        });
    }

    return next(action);
};

const store = createStore(reducer, applyMiddleware(
    thunk, stringMiddleware, logMiddleware));

const delayActionCreator = (timeout) => (dispatch) => {
    setTimeout(() => dispatch({
        type: 'DELAY_ACTION',
    }), timeout)
};

store.dispatch(delayActionCreator(3000));

export default store;