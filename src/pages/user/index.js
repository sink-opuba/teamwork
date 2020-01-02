import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { Redirect } from "react-router-dom";
import "./index.css";
import Nav from "../../components/nav";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { firstLetterToUppercase as toUpper } from "../../utils";
import Articles from "../../components/articles";
import Gifs from "../../components/gifs";

const User = ({ isAuthed, logOut, data }) => {
  const [toggleView, setToggleView] = useState(true);
  const [session, setSession ] = useState(true);
  // get loggedin user data from localStorage
  const isAdmin = data && data.isAdmin;

  const viewArticles = () => {
    setToggleView(true);
  };

  const viewGifs = () => {
    setToggleView(false);
  };

  return (
    <>
      {/* if user is not logged in, redirect to login page */}
      {!data.userId ? (
        <Redirect to="/login" />
      ) : (
        <>
          <Nav isLoggedIn={isAuthed} bgText="bg-text" logOut={logOut} />
          <main className="main-container">
            <h2>
              Greetings! {toUpper(data.lastname)}{" "}
              {isAdmin && (
                <Link to="/admin">
                  <span className="role-text">- Admin</span>{" "}
                </Link>
              )}
            </h2>
            <div>
              {toggleView ? (
                <button className="small-btn btn-white" onClick={viewGifs}>
                  View Gifs
                </button>
              ) : (
                <button className="small-btn btn-white" onClick={viewArticles}>
                  View Articles
                </button>
              )}
            </div>
          </main>
          <div className="post-view">
            {toggleView ? <Articles logOut={logOut} userSession={session} setUserSession={setSession} /> : <Gifs />}
          </div>{" "}
        </>
      )}
    </>
  );
};

User.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};
export default User;
