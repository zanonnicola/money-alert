import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = (process.env.NODE_ENV === 'production') ? createStore(rootReducer, applyMiddleware(thunkMiddleware)) : createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
