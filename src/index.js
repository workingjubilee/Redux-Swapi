import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';
//
// const initialState = {};
//
// const middleware = [thunk];
//
// const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));
//
// export default store;

const initialState = {};
const middleware = [thunk, logger]

const store = createStore(
  rootReducer, initialState, applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
