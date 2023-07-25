import React from "react";
import SignUp from "./Sign_up/SignUp";
import SignIn from "./SignIn/SignIn";

import { useSelector } from "react-redux";
import LogInSamlSSO from "./LogInSaml_SSO/LogInSamlSSO";
import ResetPassword from "./ResetPassword/ResetPassword";

const Login = () => {
  const logger = useSelector((state) => state.signIn_sign_out.value);
  
  return (
    <div>
    <div>
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
    </div>
    <div>
    <div className="border-t-4 border-t-slate-300 w-full border-white mt-[220px]">
     
    </div>
    
    <div className="text-[18px] font-bold mt-[40px] text-center">
        CÔNG TY CỔ PHẦN VẬN TẢI VÀ XUẤT NHẬP KHẨU SVN LOGISTICS
      </div>
      </div>
      </div>
  );
};

export default Login;
