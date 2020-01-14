import { createStore } from 'redux';

import reducer from './reducers';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const originalDispatch = store.dispatch;
store.dispatch = (action) => {
    if (typeof action === 'string') {
        return originalDispatch({
            type: action
        })
    }

    return originalDispatch(action);
};

store.dispatch('Hello pidar');

export default store;
