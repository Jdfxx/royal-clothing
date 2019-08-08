import React, { Component } from "react";
import FormInput from "../FormInput/form-input.component";
import './signup.styles.scss';
import CustomButton from "../CustomButton/custom-button.component";

class Signup extends Component {
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

  render() {
    return (
      <div className="sign-up">
        <h2>I dont have an account yet</h2>
        <span className="subtitle">Sign up</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="email"
            id="email2"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
          />
          <FormInput
            type="password"
            name="password"
            id="password2"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
          />
          <CustomButton type='submit'>Submit</CustomButton>
        </form>
      </div>
    );
  }
}

export default Signup;
