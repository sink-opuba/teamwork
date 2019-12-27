import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading = ({ size = "3x" }) => (
  <div style={{ color: "#5F7192", textAlign: "center" }}>
    <FontAwesomeIcon icon={faSpinner} spin size={size} />
  </div>
);

export default Loading;
