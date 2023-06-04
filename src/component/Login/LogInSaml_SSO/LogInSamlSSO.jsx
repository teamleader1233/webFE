import React from "react";
import { useState } from "react";
import style from "../Sign_up/style.module.scss";
import { useDispatch } from "react-redux";
import {
  isSignIn,
  isResetPassword,
  isSignUp,
  isUseSingle,
} from "../../../features/SignIn_SignOut/SliceSignInSignOut";
const LogInSamlSSO = () => {
  const [focusInputEmail, setfocusInputEmail] = useState(true);
  const [inputEmail, setInputEmail] = useState("");
  const [checkEmail, setCheckErrorEmail] = useState(false);
  const dispatch = useDispatch();
  const handleChangeInputEmail = (e) => {
    setInputEmail(e.target.value);
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isEmail = emailPattern.test(e.target.value);
    if (isEmail) {
      setCheckErrorEmail(true);
    } else setCheckErrorEmail(false);
  };
  return (
    <div>
      <div className={style.signUp}>
        <form action="#">
          <h1 style={{ marginBottom: "40px" }}>
            Log in to Figma with SAML SSO
          </h1>

          <div className={style.signUp_input}>
            <input
              value={inputEmail}
              onChange={(e) => handleChangeInputEmail(e)}
              className={style.signUp_input_email}
              type="email"
              placeholder="Email"
              autoComplete="username"
              autoCapitalize="off"
              autoCorrect="off"
              dir="auto"
              style={
                focusInputEmail
                  ? { border: "3px solid #000" }
                  : { border: "3px solid blue" }
              }
              onFocus={() => setfocusInputEmail(false)}
              onBlur={() => setfocusInputEmail(true)}
            />
          </div>
          <div>
            <button className={checkEmail ? style.signUp_submit : style.hidden}>
              Log in
            </button>
          </div>

          <div className={style.signUp_signOn}>
            <span onClick={() => dispatch(isSignIn())}>
              Log in with Google or a password
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogInSamlSSO;
