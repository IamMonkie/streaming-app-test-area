import React from "react";

function Navbar(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item" idName="brand">
        Welcome to the Streaming App
      </li>
      <li className="nav-item" idName="createAccount" />
      Create Account
      <li className="nav-item" idName="Login">
        Login
      </li>
    </ul>
  );
}

export default Navbar;
