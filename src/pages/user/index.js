import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./index.css";
import Nav from "../../components/Nav";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const User = ({ isAuthed, logOut }) => {
  const [toggleView, setToggleView] = useState(true);
  const onToggleView = () => setToggleView(!toggleView);
  // get loggedin user data from localStorage
  const data = JSON.parse(localStorage.getItem("data"));
  const isAdmin = data && data.isAdmin;

  return (
    <>
      {/* if user is not logged in, redirect to login page */}
      {!data ? (
        <Redirect to="/login" />
      ) : (
        <>
          <Nav isLoggedIn={isAuthed} bgText="bg-text" logOut={logOut} />
          <main className="main-container">
            <h2>
              Greetings! ${"User"}{" "}
              {isAdmin && (
                <Link to="/admin">
                  <span className="role-text">- Admin</span>{" "}
                </Link>
              )}
            </h2>
            <div>
              {toggleView ? (
                <button className="small-btn btn-white" onClick={onToggleView}>
                  View GIFs
                </button>
              ) : (
                <button className="small-btn btn-white" onClick={onToggleView}>
                  View Articles
                </button>
              )}
            </div>
          </main>
          <div className="post-view">
            <ul className="message-pane">
              <li>
                <div className="message-box">
                  <h3 className="message-title"> The title of the text </h3>
                  <span className="message-date">Dec 20</span>
                  <p className="message">
                    Some text. I want to increase the text content
                  </p>
                </div>
              </li>
              <li>
                <div className="message-box">
                  <h3 className="message-title"> A brief title </h3>
                  <span className="message-date">Dec 20</span>
                  <p className="message">Just a brief article</p>
                </div>
              </li>

              <li>
                <div className="message-box">
                  <h3 className="message-title"> The title of the text </h3>
                  <span className="message-date">Dec 20</span>
                  <p className="message">
                    Some text. I want to increase the text content
                  </p>
                </div>
              </li>

              <li>
                <div className="message-box">
                  <h3 className="message-title"> The title of the text </h3>
                  <span className="message-date">Dec 20</span>
                  <p className="message">
                    Some text. I want to increase the text content
                  </p>
                </div>
              </li>
              <li>
                <div className="message-box">
                  <h3 className="message-title"> The title of the text </h3>
                  <span className="message-date">Dec 20</span>
                  <p className="message">
                    Some text. I want to increase the text content
                  </p>
                </div>
              </li>

              <li>
                <div className="message-box">
                  <h3 className="message-title"> The title of the text </h3>
                  <span className="message-date">Dec 20</span>
                  <p className="message">
                    Some text. I want to increase the text content
                  </p>
                </div>
              </li>

              <li>
                <div className="message-box">
                  <h3 className="message-title"> The title of the text </h3>
                  <span className="message-date">Dec 20</span>
                  <p className="message">
                    Some text. I want to increase the text content
                  </p>
                </div>
              </li>

              <li>
                <div className="message-box">
                  <h3 className="message-title"> The title of the text </h3>
                  <span className="message-date">Dec 20</span>
                  <p className="message">
                    Some text. I want to increase the text content
                  </p>
                </div>
              </li>
            </ul>

            <div className="post-article-box">
              <h3 className="post-article-heading">Post Your Own Article</h3>
              <form className="post-article-form">
                <label htmlFor="article-title">Title</label>
                <input
                  type="text"
                  className="form-input"
                  id="article-title"
                  name="article-title"
                />
                <label htmlFor="article-body">Body</label>
                <textarea className="article-body" id="article-body"></textarea>
                <button type="submit">Post</button>
              </form>
            </div>
          </div>{" "}
        </>
      )}
    </>
  );
};

export default User;
