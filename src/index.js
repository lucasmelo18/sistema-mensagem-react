import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { message } from "./reducers/message";
import { routing } from "./reducers/routing";
import App from "./components/App";

const reducers = combineReducers({
  message,
  routing
});
const middleware = [thunk];

if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const store = createStore(reducers, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
