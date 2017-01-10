import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { loadState } from './persistState';

const persistedState = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = (process.env.NODE_ENV === 'production') ? createStore(rootReducer, persistedState, applyMiddleware(thunkMiddleware)) : createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
