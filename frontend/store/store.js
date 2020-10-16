import { createStore, applyMiddleware } from 'redux';
import { thunk } from '../middleware/thunk';
import rootReducer from '../reducers/root_reducer';
import { logger } from 'redux-logger';

//remove logger when deploying to production

const configureStore = (preloadedState = {}) => (
    createStore(rootReducer, preloadedState, applyMiddleware(thunk))
);

export default configureStore;