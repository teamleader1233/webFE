import React, { useState } from "react";
import { useRef } from "react";
import style from "./style.module.scss";
import google from "../../../data/img/gg.png";
import { useDispatch } from "react-redux";
import {
  isSignIn,
  isUseSingle,
} from "../../../features/SignIn_SignOut/SliceSignInSignOut";
const SignUp = () => {
  const [focusInputEmail, setfocusInputEmail] = useState(true);
  const [focusInputPassword, setfocusInputPassword] = useState(true);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [checkErrorEmail, setCheckErrorEmail] = useState(true);
  const [checkErrorPassword, setCheckErrorPassword] = useState(true);
  const dispatch = useDispatch();
  const blockedSubmit = useRef();
  const handerLogin = () => {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isEmail = emailPattern.test(inputEmail);
    if (isEmail && inputPassword) {
      // lam gi do o day
      // blockedSubmit.current.disabled = false;

      setCheckErrorPassword(true);
      setCheckErrorEmail(true);
      //
      console.log(inputEmail, inputPassword);
    } else {
      console.log(false);
      if (inputEmail.trim().length === 0 && inputPassword.trim().length === 0) {
        setCheckErrorEmail(false);
      } else if (inputEmail.trim().length === 0) {
        setCheckErrorPassword(true);
        setCheckErrorEmail(false);
      } else if (inputPassword.trim().length === 0) {
        setCheckErrorEmail(true);
        setCheckErrorPassword(false);
      }
    }
  };
  //change password
  const handleChangeInputPassword = (e) => {
    setInputPassword(e.target.value);
    setCheckErrorPassword(true);
  };
  //change email
  const handleChangeInputEmail = (e) => {
    setInputEmail(e.target.value);
    setCheckErrorEmail(true);
  };
  return (
    <div className={style.signUp}>
      <form
        action="/signUp"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1>Sign up for Figma</h1>
        <div className={style.signUp_google}>
          <img src={google} alt="" />
          <h2>Continue with Google</h2>
        </div>
        <div>
          <p style={{ opacity: "0.6", margin: "16px 0 " }}>or</p>
        </div>
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
                ? checkErrorEmail
                  ? { border: "3px solid #000" }
                  : { border: "3px solid red" }
                : { border: "3px solid blue" }
            }
            onFocus={() => setfocusInputEmail(false)}
            onBlur={() => setfocusInputEmail(true)}
          />
          {checkErrorEmail ? (
            ""
          ) : (
            <div
              style={{
                color: "red",
                textAlign: "start",
                margin: "2px 0px 0px 1px",
              }}
            >
              Please provide your email.
            </div>
          )}
          <input
            value={inputPassword}
            onChange={(e) => handleChangeInputPassword(e)}
            className={style.signUp_input_password}
            autoComplete="current-password"
            type="password"
            name="password"
            placeholder="Password"
            style={
              focusInputPassword
                ? checkErrorPassword
                  ? { border: "3px solid #000" }
                  : { border: "3px solid red" }
                : { border: "3px solid blue" }
            }
            onFocus={() => setfocusInputPassword(false)}
            onBlur={() => setfocusInputPassword(true)}
          />
          {checkErrorPassword ? (
            ""
          ) : (
            <div
              style={{
                color: "red",
                textAlign: "start",
                margin: "2px 0px 0px 1px",
              }}
            >
              Please provide your password.
            </div>
          )}
        </div>
        <div>
          <button
            ref={blockedSubmit}
            onClick={handerLogin}
            className={style.signUp_submit}
            type="submit"
          >
            Create account
          </button>
        </div>

        <div className={style.signUp_infor}>
          <span>
            By clicking "Create account" or "Continue with Google", you agree to
            the{" "}
            <span style={{ color: "blue", cursor: "pointer" }}>Figma TOS</span>{" "}
            and{" "}
            <span style={{ color: "blue", cursor: "pointer" }}>
              Privacy Policy
            </span>
            .
          </span>
        </div>

        <div className={style.signUp_signOn}>
          <span onClick={() => dispatch(isUseSingle())}>
            Use single sign-on
          </span>
        </div>
        <div>
          <span>Already have an account?</span>
          <span
            className={style.signUp_logIn}
            onClick={() => dispatch(isSignIn())}
          >
            Log in
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
