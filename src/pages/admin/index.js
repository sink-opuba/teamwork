import React, { useState } from "react";
import "./index.css";
import Nav from "../../components/Nav";
import CreateUserForm from "../../components/CreateUserForm";

const Admin = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Nav isLoggedIn={true} bgText="bg-text" />
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
  );
};

export default Admin;
