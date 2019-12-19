import React from "react";
import "./CreateUserForm.css";

const createUserForm = () => {
  return (
    <div className="create-user-container">
      <form className="create-user-form">
        <div className="form-group">
          <label for="firstname">Firstname</label>
          <input value="Sink" type="text" id="firstname" className="form-input" required />
        </div>
        <div className="form-group">
          <label for="lastname">Lastname</label>
          <input
          
            type="lastname"
            id="lastname"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" className="form-input" required />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input type="text" id="password" className="form-input" required />
        </div>
        <div className="form-group">
          <label for="jobrole">Job Role</label>
          <input type="text" id="jobrole" className="form-input" required />
        </div>
        <div className="form-group">
          <label for="dept">Department</label>
          <input type="text" id="dept" className="form-input" required />
        </div>
        <div className="form-group">
          <label for="address">Address</label>
          <input type="text" id="address" className="form-input" />
        </div>
        <div className="form-group">
          <label for="isadmin">Admin</label>
          <select id="isadmin" className="form-input">
            <option value="false" selected>
              No
            </option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="form-group">
          <label for="gender">Gender</label>
          <select id="gender" className="form-input">
            <option value="Female" selected>
              Female
            </option>
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
