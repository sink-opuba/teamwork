import React from "react";
import "./index.css";
import Nav from "../nav";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

function App({ isAuthed, logOut }) {
  return (
    <div className="App">
      <Nav isLoggedIn={isAuthed} logOut={logOut} />
      <header className="App-header">
        <h1>Let's Connect as We Work Together</h1>
        <p>- Post Gifs, Articles, Comments and more...</p>
        <Link to={process.env.PUBLIC_URL + "/user"}>
          <button>Get Started</button>
        </Link>
      </header>
    </div>
  );
}

App.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired
};

export default App;
