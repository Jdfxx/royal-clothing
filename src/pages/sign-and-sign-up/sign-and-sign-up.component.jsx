import React from "react";
import "./sign-and-sign-up.styles.scss";
import Signin from "../../components/signin/signin.component";
import Signup from "../../components/signup/signup-component";

const SignInAndSignup = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Signin />
      <Signup />
    </div>
  );
};

export default SignInAndSignup;
