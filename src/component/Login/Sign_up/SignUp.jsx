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
  const [passwordCondition, setPasswordCondition] = useState("");
  const dispatch = useDispatch();
  const blockedSubmit = useRef();

  //submit
  const handerLogin = () => {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isEmail = emailPattern.test(inputEmail.trim());
    if (isEmail && inputPassword) {
      if (inputPassword.length < 8) {
        setCheckErrorPassword(false);
        setPasswordCondition("Password must be at least 8 characters.");
      } else if (
        !inputPassword.match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~\-={}[\]|;:"<>,.?\/]).*$/
        )
      ) {
        console.log(inputPassword);
        setCheckErrorPassword(false);
        setPasswordCondition(
          "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character."
        );
      } else {
        // correct
        setCheckErrorPassword(true);
        setCheckErrorEmail(true);
        //save user localStorage
        const userSign_Up = {
          userEmail: inputEmail.trim(),
          userPassword: inputPassword.trim(),
        };
        const checkDataLocalStorage = localStorage.getItem("user");
        console.log(checkDataLocalStorage);
        if (
          checkDataLocalStorage === null ||
          checkDataLocalStorage === undefined
        ) {
          localStorage.setItem("user", JSON.stringify([]));
        }
        const userJSON = localStorage.getItem("user");
        let userCurrent = JSON.parse(userJSON);
        console.log(userCurrent);
        //add user to localStorage
        if (userCurrent && userCurrent.length === 0) {
          userCurrent = [...userCurrent, userSign_Up];
          localStorage.setItem("user", JSON.stringify(userCurrent));
          console.log(JSON.parse(localStorage.getItem("user")));
        } else if (userCurrent && userCurrent.length > 0) {
          const findUserDuplicates = userCurrent.find((item) => {
            return (
              item.userEmail.trim() === userSign_Up.userEmail &&
              item.userPassword.trim() === userSign_Up.userPassword
            );
          });

          if (!findUserDuplicates) {
            userCurrent = [...userCurrent, userSign_Up];
            // console.log(userCurrent);
            localStorage.setItem("user", JSON.stringify(userCurrent));
          }
        }
      }
    } else {
      if (inputEmail.trim().length === 0 && inputPassword.trim().length === 0) {
        setCheckErrorEmail(false);
      } else if (inputEmail.trim().length === 0) {
        setCheckErrorPassword(true);
        setCheckErrorEmail(false);
      } else if (inputPassword.trim().length === 0) {
        setCheckErrorEmail(true);
        setCheckErrorPassword(false);
        setPasswordCondition("Please provide your password.");
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
                margin: "0px 0px 0px 1px",
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
                margin: "0px 0px 0px 1px",
              }}
            >
              {passwordCondition}
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
