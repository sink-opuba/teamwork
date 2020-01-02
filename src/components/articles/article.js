import React from "react";
import { formatDate } from "../../utils";
import "./index.css";

const Article = ({ data }) => {
  const { id, createdon, title, article, authorid } = data;
  const handleOnClick = () => {
    console.log("authorId :", authorid);
    console.log("articleId :", id);
  };
  return (
    <li>
      <div onClick={handleOnClick} className="message-box">
        <h3 className="message-title"> {title}</h3>
        <span className="message-date">{formatDate(createdon)}</span>
        <p className="message">{article}</p>
      </div>
    </li>
  );
};

export default Article;
