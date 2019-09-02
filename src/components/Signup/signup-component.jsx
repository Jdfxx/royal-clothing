import React, { useState } from "react";
import FormInput from "../FormInput/form-input.component";
import "./signup.styles.scss";
import CustomButton from "../CustomButton/custom-button.component";
import { signupStart } from "../../store/user/user.actions";
import { connect } from "react-redux";

const Signup = ({ signUp }) => {
  const [userData, setData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { displayName, email, password, confirmPassword } = userData;

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords dont match, please try again");
      return;
    }
    signUp({ email, password, displayName });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setData({
      ...userData,
      [name]: value
    });
  };

  return (
    <div className="sign-up">
      <h2>I dont have an account yet</h2>
      <span className="subtitle">Sign up</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          id="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Name"
        />
        <FormInput
          type="text"
          name="email"
          id="email2"
          value={email}
          handleChange={handleChange}
          label="Email"
        />
        <FormInput
          type="password"
          name="password"
          id="password2"
          value={password}
          handleChange={handleChange}
          label="Password"
        />
        <FormInput
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
        />
        <CustomButton type="submit">Submit</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUp: userCredentials => dispatch(signupStart(userCredentials))
});

export default connect(
  null,
  mapDispatchToProps
)(Signup);
