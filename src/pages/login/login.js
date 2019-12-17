import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>TeamWork</h2>
        <div className="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" className="form-input" required />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-input"
            required
          />
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
