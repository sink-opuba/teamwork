import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading = () => (
  <div style={{ color: "#5F7192", textAlign: "center" }}>
    <FontAwesomeIcon icon={faSpinner} spin size="3x" />
  </div>
);

export default Loading;