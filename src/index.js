import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reducer from "./reducers";
import middleware from "./middleware";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";

export const store = createStore(reducer, middleware);
const root = ReactDOM.createRoot(
  document.getElementById("root") || document.createElement("div")
);
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
