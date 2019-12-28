import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import App from "./components/app";
import Login from "./pages/login";
import Admin from "./pages/admin";
import User from "./pages/user";
import NotFound from "./components/NotFound";

const Routes = () => {
  const [login, setLogin] = React.useState(
    localStorage.getItem("data") ? true : false
  );
  const logOut = () => {
    localStorage.removeItem("data");
    setLogin(false);
  };
  const userData = JSON.parse(localStorage.getItem("data")) || {};

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
          render={props => <Login {...props} setLoginStatus={setLogin} isAuthed={login} />}
        />
        <Route
          path="/admin"
          render={props => (
            <Admin
              {...props}
              setLoginStatus={setLogin}
              isAuthed={login}
              logOut={logOut}
              data={userData}
            />
          )}
        />
        <Route
          path="/user"
          render={props => (
            <User {...props} isAuthed={login} logOut={logOut} data={userData} />
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
