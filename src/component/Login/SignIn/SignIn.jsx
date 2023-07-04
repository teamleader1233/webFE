import React, { useRef } from "react";
import style from "../Sign_up/style.module.scss";
import { useState } from "react";
import google from "../../../data/img/gg.png";
import logoGG from "../../../data/img/gg.png";
import { useDispatch } from "react-redux";
import {
  isSignIn,
  isResetPassword,
  isSignUp,
  isUseSingle,
} from "../../../features/SignIn_SignOut/SliceSignInSignOut";
const SignIn = () => {
  const [focusInputEmail, setfocusInputEmail] = useState(true);
  const [focusInputPassword, setfocusInputPassword] = useState(true);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [checkErrorEmail, setCheckErrorEmail] = useState(true);
  const [checkErrorPassword, setCheckErrorPassword] = useState(true);
  const blockedSubmit = useRef();

  const dispatch = useDispatch();
  // check login
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
    const userCurrent = JSON.parse(localStorage.getItem("user"));
    //get user in local storage
    if (userCurrent) {
      const checkUserPreLoggin = userCurrent.find((item) => {
        return item.userEmail.trim() === e.target.value.trim();
      });
      console.log(checkUserPreLoggin);
      if (checkUserPreLoggin) {
        setInputPassword(checkUserPreLoggin.userPassword.trim());
      } else if (!checkUserPreLoggin) {
        setInputPassword("");
      }
    }

    setCheckErrorEmail(true);
  };
  return (
    <div>
      <div className={style.signUp}>
        <form
          action="/SignIn"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="font-semibold text-[32px]">Sign in </h1>
          {/* <div className={style.signUp_google}>
            <img src={google} alt="" />
            <h2>Continue with Google</h2>
          </div>
          <div>
            <p style={{ opacity: "0.6", margin: "16px 0 " }}>or</p>
          </div> */}

          <div className={style.signUp_input}>
            <div className={style.space_line}>
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
                      ? { border: "2px solid #000" }
                      : { border: "2px solid red" }
                    : { border: "2px solid blue" }
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
            </div>
            <div className={style.space_line}>
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
                      ? { border: "2px solid #000" }
                      : { border: "2px solid red" }
                    : { border: "2px solid blue" }
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
          </div>
          <div className={style.signUp_another}>
            <div
              className={style.signUp_another_logo}
              style={{ backgroundColor: "#087cea" }}
            >
              <i className="bi bi-facebook"></i>
            </div>
            <div className={`${style.signUp_another_logo} flex justify-center`}>
              <img src={logoGG} alt="logoGG" />
            </div>
            <div
              className={style.signUp_another_logo}
              style={{ backgroundColor: "#161616" }}
            >
              <i className="bi bi-apple"></i>
            </div>
          </div>
          <div></div>
          <div>
            <button
              ref={blockedSubmit}
              onClick={handerLogin}
              className={style.signUp_submit}
            >
              Log in
            </button>
          </div>

          {/* <div className={style.signUp_signOn}>
            <span onClick={() => dispatch(isUseSingle())}>
              Use single sign-on
            </span>
            <span onClick={() => dispatch(isResetPassword())}>
              Reset password
            </span>
          </div> */}
          <div style={{ marginTop: "28px" }}>
            <span>No account?</span>
            <span
              className={style.signUp_logIn}
              onClick={() => dispatch(isSignUp())}
            >
              Create one
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
