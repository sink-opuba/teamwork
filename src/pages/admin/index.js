import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { PropTypes } from "prop-types";
import "./index.css";
import Nav from "../../components/Nav";
import CreateUserForm from "../../components/CreateUserForm";

const Admin = ({ isAuthed, logOut, data }) => {
  const [showForm, setShowForm] = useState(false);
  const isAdmin = data && data.isAdmin;

  return (
    <>
      {!isAdmin ? (
        <Redirect to="/user" />
      ) : (
        <>
          <Nav isLoggedIn={isAuthed} logOut={logOut} bgText="bg-text" />
          <main className="main-container">
            <h2>Welcome ${"AdminName"}</h2>
            {!showForm && (
              <button className="btn-white" onClick={() => setShowForm(true)}>
                Add User
              </button>
            )}
          </main>
          {showForm && <CreateUserForm />}
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
