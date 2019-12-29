import React from "react";
import "./index.css";
import PostArticleForm from "../postArticleForm";

const Articles = () => {
  return (
    <>
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
      <PostArticleForm />
    </>
  );
};

export default Articles;
