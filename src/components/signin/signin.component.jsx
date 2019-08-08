import React, { Component } from "react";
import FormInput from "../FormInput/form-input.component";
import "./signin.styles.scss";
import CustomButton from "../CustomButton/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils.js";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleGoogleSubmit = () => {
    signInWithGoogle();
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span className="subtitle">Sign in with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="email"
            id="email1"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
          />
          <FormInput
            type="password"
            name="password"
            id="password1"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
          />
          <div className="buttons">
            <CustomButton type="submit">Submit</CustomButton>
            <CustomButton isGoogleSignIn onClick={this.handleGoogleSubmit}>
              Signin with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
