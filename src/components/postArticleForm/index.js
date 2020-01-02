import React, { useState } from "react";
import PropTypes from "prop-types";

import "./index.css";

const initialState = { title: "", article: "" };

const PostArticleForm = ({ addPost }) => {
  const [formValue, setFormValue] = useState(initialState);

  const handleOnChange = event => {
    const { name, value } = event.target;
    return setFormValue({
      ...formValue,
      [name]: value
    });
  };
  const handleOnSubmit = event => {
    event.preventDefault();
    addPost(formValue);
    setFormValue(initialState);
  };
  return (
    <>
      <hr></hr>
    <div className="post-article-container">
      <h3 className="post-article-header">Post Your Own Article</h3>
      <form className="post-article-form" onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label htmlFor="article-title">Title</label>
          <input
            type="text"
            className="form-input"
            autoCapitalize="sentences"
            id="article-title"
            name="title"
            value={formValue.title}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="article-body">Body</label>
          <textarea
            className="article-body form-input"
            id="article-body"
            autoCapitalize="sentences"
            name="article"
            value={formValue.article}
            onChange={handleOnChange}
            placeholder="Write here.."
            required
          ></textarea>
        </div>
        <button type="submit">Post</button>
      </form>
    </div>
    </>
  );
};

PostArticleForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default PostArticleForm;
