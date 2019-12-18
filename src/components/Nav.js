import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = ({ isLoggedIn, bgText }) => {
  return (
    <nav className={`nav ${bgText}`}>
      <Link to="/">
        <a href className="nav-link">
          TeamWork
        </a>
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
