import React, { Component } from 'react'

export class NavBar extends Component {

  onClick = e =>{
    this.props.signInorSignUp(e.target.innerHTML);
  }

  render() {
    return (
      <nav className="navbar bg-dark">
      <h1>Social Media App</h1>
      <button type="button" className="btn btn-primary" onClick={this.onClick}>
        SignUp
      </button>
      <button type="button" className="btn btn-light " onClick={this.onClick}>
        SignIn
      </button>
    </nav>
    )
  }
}

export default NavBar;

