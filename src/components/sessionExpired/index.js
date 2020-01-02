import React from "react";
import "./index.css";
import PropTypes from "prop-types";

const SessionExpired = ({ logOut }) => {
  return (
    <div className="session-expired-container bg-text">
      <h3>Your session has expired</h3>
      <button className="btn-white" onClick={() => logOut()}>Signin</button>
    </div>
  );
};

SessionExpired.propTypes = {
  logOut: PropTypes.func.isRequired
};

export default SessionExpired;
