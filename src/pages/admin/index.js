import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { PropTypes } from "prop-types";
import "./index.css";
import Nav from "../../components/nav";
import CreateUserForm from "../../components/createUserForm";
import { firstLetterToUppercase as toUpper } from "../../utils";
import API from "../../api";
const defaultFormValue = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "Female",
  password: "",
  jobRole: "",
  department: "",
  address: "",
  isAdmin: false
};

const Admin = ({ isAuthed, logOut, data }) => {
  const [showForm, setShowForm] = useState(false);
  const [formValue, setFormValue] = useState(defaultFormValue);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newUser, setNewUser] = useState(null);

  const isAdmin = data && data.isAdmin;
  const handleAddUser = async data => {
    setLoading(true);
    try {
      const response = await API.post("/auth/create-user", data);
      setLoading(false);
      setFormValue(defaultFormValue);
      const { email, password } = JSON.parse(response.config.data);
      setNewUser({ email, password });
    } catch (error) {
      setLoading(false);
      const { data } = error.response;
      setError({
        status: "error",
        msg: data.error
      });
    }
  };
  return (
    <>
      {!isAdmin ? (
        <Redirect to="/user" />
      ) : (
        <>
          <Nav isLoggedIn={isAuthed} logOut={logOut} bgText="bg-text" />
          <main className="main-container">
            <h2>Welcome {toUpper(data.lastname)}</h2>
            {!showForm && (
              <button className="btn-white" onClick={() => setShowForm(true)}>
                Add User
              </button>
            )}
          </main>
          {showForm && (
            <CreateUserForm
              formValue={formValue}
              setFormValue={setFormValue}
              addUser={handleAddUser}
              isLoading={loading}
              error={error}
              removeError={setError}
              closeForm={setShowForm}
              user={newUser}
              setUser={setNewUser}
            />
          )}
        </>
      )}
    </>
  );
};

Admin.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};
export default Admin;
