import React from "react";
import "./sign-and-sign-up.styles.scss";
import Signin from "../../components/signin/signin.component";
import Signup from "../../components/signup/signup-component";

const signInAndSignup = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Signin />
      <Signup />
    </div>
  );
};

export default signInAndSignup;
