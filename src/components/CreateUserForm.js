import React from "react";
import "./CreateUserForm.css";

const createUserForm = () => {
  return (
    <div className="create-user-container">
      <form className="create-user-form">
        <div className="form-group">
          <label htmlFor="firstname">Firstname</label>
          <input type="text" id="firstname" className="form-input" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Lastname</label>
          <input
            type="lastname"
            id="lastname"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="form-input" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            minLength="5"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobrole">Job Role</label>
          <input type="text" id="jobrole" className="form-input" required />
        </div>
        <div className="form-group">
          <label htmlFor="dept">Department</label>
          <input type="text" id="dept" className="form-input" required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="isadmin">Admin</label>
          <select defaultValue={false} id="isadmin" className="form-input">
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select defaultValue="Female" id="gender" className="form-input">
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </div>
        <button className="create-user-button btn-white" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default createUserForm;
