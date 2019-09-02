import React, { useState } from "react";
import FormInput from "../FormInput/form-input.component";
import "./signin.styles.scss";
import CustomButton from "../CustomButton/custom-button.component";
import {
  googleSigninStart,
  emailSigninStart
} from "../../store/user/user.actions";
import { connect } from "react-redux";

const Signin = ({ googleSigninStart, emailSigninStart }) => {
  const [userData, setData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userData;

  const handleSubmit = e => {
    e.preventDefault();
    emailSigninStart(email, password);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setData({
      ...userData,
      [name]: value
    });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span className="subtitle">Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="email"
          id="email1"
          value={email}
          handleChange={handleChange}
          label="Email"
        />
        <FormInput
          type="password"
          name="password"
          id="password1"
          value={password}
          handleChange={handleChange}
          label="Password"
        />
        <div className="buttons">
          <CustomButton type="submit">Submit</CustomButton>
          <CustomButton
            type="button"
            isGoogleSignIn
            onClick={() => googleSigninStart()}
          >
            Signin with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSigninStart: () => dispatch(googleSigninStart()),
  emailSigninStart: (email, password) =>
    dispatch(emailSigninStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(Signin);
