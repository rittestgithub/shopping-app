// import { createStore, compose } from "redux";
// import rootReducer from "./reducers/index";


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducer, composeEnhancers());

// export default store;

import { createStore, applyMiddleware, compose } from 'redux';
import {thunk}from 'redux-thunk'; // You may need to install redux-thunk if not already installed
import { persistStore } from 'redux-persist';
import persistedReducer from './Components/PersistConfig';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };
