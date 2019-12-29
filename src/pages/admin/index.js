import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { PropTypes } from "prop-types";
import "./index.css";
import Nav from "../../components/nav";
import CreateUserForm from "../../components/createUserForm";
import { firstLetterToUppercase as toUpper } from "../../utils";

const URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/api/v1/auth/create-user"
    : "https://sink-teamwork-api.herokuapp.com/api/v1/auth/create-user";
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
  const { token, lastname } = data;
  const handleAddUser = async data => {
    setLoading(true);
      try {
        const result = await postData(URL, data);
        setLoading(false);
        if (result.status === "error") {
          throw new Error(result.error);
        }
        setFormValue(defaultFormValue);
        const { email, password } = data;
        setNewUser({ email, password });
      } catch (error) {
        setError({
          status: "error",
          msg: error.message
        });
      } 
  };

  const postData = async (url, data) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  };
  return (
    <>
      {!isAdmin ? (
        <Redirect to="/user" />
      ) : (
        <>
          <Nav isLoggedIn={isAuthed} logOut={logOut} bgText="bg-text" />
          <main className="main-container">
            <h2>Welcome {toUpper(lastname)}</h2>
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
