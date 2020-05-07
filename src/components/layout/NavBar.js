import React from "react";

function NavBar() {
  return (
    <nav className="navbar bg-dark" style={{ display: "inline-block" }}>
      <h1 style={{ float: "left" }}>Social Media App</h1>
      <button type="button" class="btn btn-primary " style={{ float: "right" }}>
        SignUp
      </button>
      <button type="button" class="btn btn-light " style={{ float: "right" }}>
        SignIn
      </button>
    </nav>
  );
}

export default NavBar;
