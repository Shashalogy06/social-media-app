import React from "react";

function NavBar() {
  return (
    <nav className="navbar bg-dark">
      <h1>Social Media App</h1>
      <button type="button" class="btn btn-primary ">
        SignUp
      </button>
      <button type="button" class="btn btn-light ">
        SignIn
      </button>
    </nav>
  );
}

export default NavBar;
