import React from "react";
import "./index.css";

const PostArticleForm = () => {
    const addPost = (event) => {
        // event.preventDefault()
    }
  return (
    <div className="post-article-container">
      <h3 className="post-article-header">Post Your Own Article</h3>
      <form className="post-article-form">
        <div className="form-group">
          <label htmlFor="article-title">Title</label>
          <input
            type="text"
            className="form-input"
            id="article-title"
            name="article-title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="article-body">Body</label>
          <textarea
            className="article-body form-input"
            id="article-body"
            placeholder="Write here.."
            required
          ></textarea>
        </div>
        <button onClick={addPost} type="submit">Post</button>
      </form>
    </div>
  );
};

export default PostArticleForm;
