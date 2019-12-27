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

const Routing = () => {
  const [login, setLogin] = React.useState(
    localStorage.getItem("data") ? true : false
  );
  const logOut = () => {
    localStorage.removeItem("data");
    setLogin(false);
  };

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={props => <App {...props} isAuthed={login} logOut={logOut} />}
        />
        <Route
          path="/login"
          render={props => <Login {...props} setLogin={setLogin} />}
        />
        <Route path="/admin" component={Admin} />
        <Route
          path="/user"
          render={props => <User {...props} isAuthed={login} logOut={logOut} />}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
ReactDOM.render(<Routing />, document.getElementById("root"));

//Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
