import React from "react";
import "./sign-and-sign-up.styles.scss";
import Signin from "../../components/Signin/signin.component";
import Signup from "../../components/Signup/signup-component";

const SignInAndSignup = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Signin />
      <Signup />
    </div>
  );
};

export default SignInAndSignup;

