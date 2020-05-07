import React, { Component } from 'react';
import "./App.css";
import NavBar from "./components/layout/NavBar";
import FormPage from "./components/layout/FormPage";
import SignIn from "./components/layout/SignIn";

export class App extends Component {

  state={
    checkLogin:0
  };

  signInorSignUp= (text) =>{
    console.log(text);
    if(text==='SignIn')
    {
      this.setState({checkLogin : 2});
    }
    else
    {
      this.setState({checkLogin : 1});
    }
  };

  render() {
    return (
      <div className="App">
      <NavBar signInorSignUp={this.signInorSignUp} />
      {this.state.checkLogin===0?<h1></h1>:this.state.checkLogin===1?<FormPage />:<SignIn />}
    </div>
    )
  }
}

export default App;
