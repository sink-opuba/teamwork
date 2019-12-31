import React, { useState, Fragment } from "react";
import { PropTypes } from "prop-types";
import { Redirect } from "react-router-dom";
import "./index.css";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import axios from "axios";
const URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/api/v1/auth/signin"
    : "https://sink-teamwork-api.herokuapp.com/api/v1/auth/signin";

const Login = ({ setLoginStatus, isAuthed }) => {
  const [inputVal, setInputVal] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = event => {
    //hide error message
    setError(null);
    const { name, value } = event.target;
    setInputVal({ ...inputVal, [name]: value.trim() });
  };

  const handleSubmit = async event => {
    setError(null);
    event.preventDefault();
    setIsLoading(true);
    const data = inputVal;
    try {
      const response = await axios.post(URL, data);
      setIsLoading(false);
      setUserData(response.data.data);
    } catch (error) {
      setIsLoading(false);
      const { data } = error.response;
      setError({
        status: "error",
        msg: data.error
      });
    }
  };

  const setUserData = data => {
    localStorage.setItem("data", JSON.stringify(data));
    setLoginStatus(true);
  };
  return (
    <Fragment>
      {isAuthed && <Redirect to="/user" />}
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>TeamWork</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={inputVal.email}
              className="form-input"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              minLength="5"
              id="password"
              name="password"
              value={inputVal.password}
              className="form-input"
              required
              onChange={handleChange}
            />
          </div>
          {error && <ErrorMessage message={error.msg} />}
          {isLoading && <Loading size="1x" />}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  setLoginStatus: PropTypes.func.isRequired,
  isAuthed: PropTypes.bool
};
export default Login;
