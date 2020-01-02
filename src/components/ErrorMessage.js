import React from "react";
import { PropTypes } from "prop-types";

const ErrorMessage = ({ message, color = "#000" }) => (
  <p className="error-text" style={{color}} >Error: {message}</p>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  color: PropTypes.string
};
export default ErrorMessage;
