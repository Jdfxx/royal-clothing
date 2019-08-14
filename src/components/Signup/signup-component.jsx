import React, { Component } from "react";
import FormInput from "../FormInput/form-input.component";
import './signup.styles.scss';
import CustomButton from "../CustomButton/custom-button.component";
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: "",
      password: "",
      confirmPassword: ''
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const {displayName, email, password, confirmPassword} = this.state;
    
    if(password !== confirmPassword) {
      alert("Passwords dont match, please try again");
      return;
    };

    try {
      const user = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user.user, {displayName});
      this.setState({
        displayName: '',
        email: "",
        password: "",
        confirmPassword: ''
      });
    } catch (error) {
      console.log("Error: ", error);
    }
  
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
            name="displayName"
            id="displayName"
            value={this.state.displayName}
            handleChange={this.handleChange}
            label="Name"
          />
          <FormInput
            type="text"
            name="email"
            id="email2"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            id="password2"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
          />
          <FormInput
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
          />
          <CustomButton type='submit'>Submit</CustomButton>
        </form>
      </div>
    );
  }
}

export default Signup;
