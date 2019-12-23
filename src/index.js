import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import Login from "./pages/login";
import Admin from "./pages/admin";
import * as serviceWorker from "./serviceWorker";
import User from "./pages/user";
import NotFound from "./components/NotFound";

const Routing = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/admin" component={Admin} />
      <Route path="/user" component={User} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

ReactDOM.render(<Routing />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
