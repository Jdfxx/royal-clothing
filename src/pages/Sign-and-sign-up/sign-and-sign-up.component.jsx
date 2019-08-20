import React from "react";
import Signin from "../../components/Signin/signin.component";
import Signup from "../../components/Signup/signup-component";
import {LoginContainer} from "./sign-in-and-sign-up.styles";

const SignInAndSignup = () => {
  return (
    <LoginContainer >
      <Signin />
      <Signup />
    </LoginContainer>
  );
};

export default SignInAndSignup;

