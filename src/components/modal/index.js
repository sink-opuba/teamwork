import React from "react";
import { PropTypes } from "prop-types";
import "./index.css";
const Modal = ({ user, setUser }) => {
  const onClose = () => {
    //close modal
    setUser(null);
  };
  return (
    <div className="modal-content">
      <span onClick={onClose} title="OK" className="modal-closer">
        &times;
      </span>
      <h2 className="modal-header">User successfully created</h2>
      <div className="modal-details">
        <p>Please save new user login details</p>
        <span>
          Email: <i>{user.email}</i>
        </span>
        <span>
          Password: <b>{user.password}</b>
        </span>
      </div>
    </div>
  );
};

Modal.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func.isRequired
};

export default Modal;
