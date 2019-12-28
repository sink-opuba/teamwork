import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const Nav = ({ isLoggedIn, bgText, logOut }) => {
  return (
    <nav className={`nav ${bgText}`}>
      <Link to="/">
        <span className="nav-link">TeamWork</span>
      </Link>
      {isLoggedIn ? (
        <button onClick={logOut}>Logout</button>
      ) : (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}
    </nav>
  );
};

Nav.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  bgText: PropTypes.string,
  logOut: PropTypes.func.isRequired
};
export default Nav;
