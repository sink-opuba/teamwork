import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const fourOfour = {
  textAlign: "center",
  padding: "2rem",
  color: "#5F7192",
  fontSize: 120,
  fontweight: "bolder"
};
const NotFound = () => {
  return (
    <>
      <Nav isLoggedIn={false} bgText="bg-text" />
      <main className="main-container">
        <h2>Oops! Page Not Found</h2>
        <Link to="/">
          <button className="btn-white small-btn">&larr; Home</button>
        </Link>
      </main>
      <div style={fourOfour}>404</div>
    </>
  );
};

export default NotFound;
