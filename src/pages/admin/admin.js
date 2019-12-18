import React from "react";
import "./admin.css";
import Nav from "../../components/Nav";
import CreateUserForm from "../../components/CreateUserForm"

const Admin = () => {
  return (
    <>
      <Nav isLoggedIn={true} bgText="bg-text" />
      <div className="admin-container">
        <h2>Welcome ${"AdminName"}</h2>
        <button>Add User</button>
      </div>

      <CreateUserForm />
    </>
  );
};

export default Admin;
