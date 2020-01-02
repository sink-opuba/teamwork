import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import App from "./components/app";
import Login from "./pages/login";
import Admin from "./pages/admin";
import User from "./pages/user";
// import NotFound from "./components/NotFound";

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
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route
          exact
          path={process.env.PUBLIC_URL + "/"}
          render={props => <App {...props} isAuthed={login} logOut={logOut} />}
        />
        <Route
          path={process.env.PUBLIC_URL + "/login"}
          render={props => (
            <Login {...props} setLoginStatus={setLogin} isAuthed={login} />
          )}
        />
        <Route
          path={process.env.PUBLIC_URL + "/admin"}
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
          path={process.env.PUBLIC_URL + "/user"}
          render={props => (
            <User {...props} isAuthed={login} logOut={logOut} data={userData} />
          )}
        />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
