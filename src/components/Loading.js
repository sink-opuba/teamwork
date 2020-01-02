import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { PropTypes } from "prop-types";

const Loading = ({ color, size }) => (
  <div style={{ color, textAlign: "center" }}>
    <FontAwesomeIcon icon={faSpinner} spin size={size} />
  </div>
);

Loading.defaultProps = { size: "2x", color: "#5F7192" };

Loading.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
};
export default Loading;
