import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { Redirect } from "react-router-dom";
import "./index.css";
import Loading from "../../components/Loading";
const URL = "http://localhost:8000/api/v1/auth/signin";

const Login = ({ setLoginStatus }) => {
  const [inputVal, setInputVal] = useState({ email: "", password: "" });
  const [error, setError] = useState({ status: null, msg: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleChange = event => {
    //hide error message
    setError({ status: null, msg: "" });
    const { name, value } = event.target;
    setInputVal({ ...inputVal, [name]: value.trim() });
  };

  const handleSubmit = event => {
    setIsLoading(true);
    const data = inputVal;
    postData(URL, data)
      .then(res => {
        setIsLoading(false);
        if (res.status === "error") {
          throw new Error(res.error);
        }
        setUserData(res.data);
      })
      .catch(err => {
        setIsLoading(false);
        setError({ status: "error", msg: err.message });
      });
    setInputVal({ email: "", password: "" });
    event.preventDefault();
  };

  const postData = async (url, data) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  };

  const setUserData = data => {
    localStorage.setItem("data", JSON.stringify(data));
    setData(data);
    setLoginStatus(true);
  };
  if (data) {
    return <Redirect to="/user" />;
  }
  return (
    <div className="login-container" onSubmit={handleSubmit}>
      <form className="login-form">
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
        {error.status && <p className="login-error">Error: {error.msg}</p>}
        {isLoading && <Loading size="1x" />}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

Login.propTypes = {
  setLoginStatus: PropTypes.func.isRequired
};
export default Login;
