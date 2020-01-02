import React, { useState, useEffect } from "react";
import "./index.css";
import PropTypes from "prop-types";
import PostArticleForm from "../postArticleForm";
import Article from "./article";
import Loading from "../Loading";
import API from "../../api";
import ErrorMessage from "../ErrorMessage";
import SessionExpired from "../sessionExpired";
import { sortArticle } from "../../utils";

const Articles = ({ logOut, userSession, setUserSession }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    let didCancel = false;
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const result = await API.get("/feed/articles");
        if (!didCancel) {
          setData(result.data.data);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        if (error.response.status === 401) {
          //if session expired
          return setUserSession(false);
        }
        setError("Oops! Something went wrong.");
      }
    };

    fetchData();
    return () => {
      //clean up
      didCancel = true;
    };
  }, [count, setUserSession]);

  const addPost = async formData => {
    try {
      const response = await API.post("/articles", formData);
      if (response.data.data) {
        //trigger useEffect hook
        setCount(c => c + 1);
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ul className="message-pane">
          {sortArticle(data).map(article => {
            return <Article key={article.id} data={article} />;
          })}
        </ul>
      )}
      {!userSession && <SessionExpired logOut={logOut} />}
      {error && <ErrorMessage message={error} />}
      <PostArticleForm addPost={addPost} />
    </>
  );
};

Articles.propTypes = {
  logOut: PropTypes.func.isRequired,
  userSession: PropTypes.bool.isRequired,
  setUserSession: PropTypes.func.isRequired
};

export default Articles;
