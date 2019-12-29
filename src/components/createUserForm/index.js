import React from "react";
import "./index.css";
import { PropTypes } from "prop-types";
import ErrorMessage from "../ErrorMessage";
import Loading from "../Loading";
import Modal from "../modal";
const closeFormStyle = {
  textAlign: "right",
  marginRight: "2.5rem",
  marginTop: "1rem",
  fontSize: "2rem",
  cursor: "pointer"
};
const createUserForm = ({
  formValue,
  setFormValue,
  addUser,
  isLoading,
  error,
  removeError,
  closeForm,
  user,
  setUser
}) => {
  const handleChange = event => {
    removeError();
    const { name, value } = event.target;
    if (name === "address") {
      return setFormValue({ ...formValue, [name]: value });
    }
    return setFormValue({ ...formValue, [name]: value.trim() });
  };

  const onSubmit = event => {
    event.preventDefault();
    addUser(formValue);
  };
  return (
    <div className="create-user-container">
      <p style={closeFormStyle}>
        <span title="Close" onClick={() => closeForm()}>
          &times;
        </span>
      </p>
      <form className="create-user-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            id="firstname"
            value={formValue.firstName}
            name="firstName"
            className="form-input"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Lastname</label>
          <input
            type="lastname"
            id="lastname"
            value={formValue.lastName}
            name="lastName"
            className="form-input"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formValue.email}
            name="email"
            className="form-input"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password <span className="password-note"> - Please note it</span>
          </label>
          <input
            type="text"
            id="password"
            value={formValue.password}
            name="password"
            autoComplete="off"
            minLength="5"
            className="form-input"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobrole">Job Role</label>
          <input
            type="text"
            id="jobrole"
            value={formValue.jobRole}
            name="jobRole"
            className="form-input"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dept">Department</label>
          <input
            type="text"
            id="dept"
            value={formValue.department}
            name="department"
            className="form-input"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            value={formValue.address}
            name="address"
            className="form-input"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="isadmin">Admin</label>
          <select
            value={formValue.isAdmin}
            id="isadmin"
            name="isAdmin"
            className="form-input"
            onChange={handleChange}
          >
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            value={formValue.gender}
            id="gender"
            name="gender"
            className="form-input"
            onChange={handleChange}
          >
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </div>
        {isLoading && <Loading size="1x" color="#fff" />}
        {error && <ErrorMessage message={error.msg} />}
        <button className="create-user-button btn-white" type="submit">
          Submit
        </button>
      </form>
      {user && <Modal user={user} setUser={setUser} />}
    </div>
  );
};

createUserForm.propTypes = {
  formValue: PropTypes.object.isRequired,
  setFormValue: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  removeError: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired,
  user: PropTypes.object,
  setUser: PropTypes.func.isRequired
};
export default createUserForm;
