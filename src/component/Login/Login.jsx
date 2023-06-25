import React from "react";
import SignUp from "./Sign_up/SignUp";
import SignIn from "./SignIn/SignIn";

import { useSelector } from "react-redux";
import LogInSamlSSO from "./LogInSaml_SSO/LogInSamlSSO";
import ResetPassword from "./ResetPassword/ResetPassword";
const Login = () => {
  const logger = useSelector((state) => state.signIn_sign_out.value);
  console.log(logger);
  return (
    <div>
      {logger === "SIGN_IN" ? (
        <SignIn />
      ) : logger === "SIGN_UP" ? (
        <SignUp />
      ) : logger === "USE_SINGLE" ? (
        <LogInSamlSSO />
      ) : (
        <ResetPassword />
      )}
    </div>
  );
};

export default Login;
