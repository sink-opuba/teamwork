import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = ({ isLoggedIn, bgText }) => {
  return (
    <nav className={`nav ${bgText}`}>
      <Link to="/">
        <span className="nav-link">
          TeamWork
        </span>
      </Link>
      {isLoggedIn ? (
        <button>Logout</button>
      ) : (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}
    </nav>
  );
};

export default Nav;
