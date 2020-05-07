import React, { Component } from 'react'


export class NavBar extends Component {

  onClick = e =>{
    this.props.signInorSignUp(e.target.innerHTML);
  }

  render() {
    return (
      <nav className="navbar bg-dark" style={{ display: "inline-block" }}>
      <h1 style={{ float: "left" }}>Social Media App</h1>
      <button type="button" className="btn btn-primary" style={{ float: "right" }} onClick={this.onClick}>
        SignUp
      </button>
      <button type="button" className="btn btn-light " style={{ float: "right" }} onClick={this.onClick}>
        SignIn
      </button>
    </nav>
    )
  }
}

export default NavBar;

