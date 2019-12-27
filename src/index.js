import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./routes";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Routes />, document.getElementById("root"));

//Hot Module Replacement
if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept();
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
