// store.js
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './userReducer'; // Update this path

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    // Apply any middleware if needed
  )
);

export default store;
