import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import Login from "./pages/login/login";
import * as serviceWorker from "./serviceWorker";

const Routing = () => (
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/login" component={Login} />
  </Router>
);

ReactDOM.render(<Routing />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
