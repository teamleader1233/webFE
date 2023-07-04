import React, { useState } from "react";
import { useRef } from "react";
import style from "./style.module.scss";
import logoGG from "../../../data/img/gg.png";
import { useDispatch } from "react-redux";
import {
  isSignIn,
  isUseSingle,
} from "../../../features/SignIn_SignOut/SliceSignInSignOut";

const SignUp = () => {
  const [focusInputFN, setfocusInputFN] = useState(true);
  const [focusInputLN, setfocusInputLN] = useState(true);
  const [focusInputEmail, setfocusInputEmail] = useState(true);
  const [focusInputPassword, setfocusInputPassword] = useState(true);
  const [inputFirstName, setInputFirstName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [checkErrorFN, setCheckErrorFN] = useState(true);
  const [checkErrorLN, setCheckErrorLN] = useState(true);
  const [checkErrorEmail, setCheckErrorEmail] = useState(true);
  const [checkErrorPassword, setCheckErrorPassword] = useState(true);
  const [passwordCondition, setPasswordCondition] = useState("");
  const dispatch = useDispatch();
  const blockedSubmit = useRef();
  //check input name
  const checkInputName = (inputName) => {
    const alphas = "-'ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    inputName = inputName.toUpperCase();

    for (let char of inputName) {
      let checkAlpha = false;
      for (let alpha of alphas) {
        if (alpha === char) {
          checkAlpha = true;
          break;
        }
      }
      if (checkAlpha === false) return false;
    }
    return true;
  };

  //submit
  const handerLogin = () => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmail = inputEmail.trim().match(emailRegex);
    const isFN = inputFirstName.trim() && checkInputName(inputFirstName.trim());
    const isLN = inputLastName.trim() && checkInputName(inputLastName.trim());

    // check conditions input

    if (!isEmail || inputPassword || !isFN || !isLN) {
      if (isFN.length === 0 || !isFN) {
        setCheckErrorFN(false);
      }
      if (isLN.length === 0 || !isLN) {
        setCheckErrorLN(false);
      }
      if (!isEmail) {
        setCheckErrorEmail(false);
      }
      if (inputPassword.length < 8) {
        setCheckErrorPassword(false);
        setPasswordCondition("Password must be at least 8 characters.");
      } else if (
        !inputPassword.match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~\-={}[\]|;:"<>,.?\/]).*$/
        )
      ) {
        setCheckErrorPassword(false);
        setPasswordCondition(
          "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character."
        );
      } else {
        // correct input
        setCheckErrorPassword(true);
        setCheckErrorEmail(true);
        //save user localStorage
        const userSign_Up = {
          userEmail: inputEmail.trim(),
          userPassword: inputPassword.trim(),
        };
        const checkDataLocalStorage = localStorage.getItem("user");
        //console.log(checkDataLocalStorage);
        if (
          checkDataLocalStorage === null ||
          checkDataLocalStorage === undefined
        ) {
          localStorage.setItem("user", JSON.stringify([]));
        }
        const userJSON = localStorage.getItem("user");
        let userCurrent = JSON.parse(userJSON);
        //console.log(userCurrent);
        //add user to localStorage
        if (userCurrent && userCurrent.length === 0) {
          userCurrent = [...userCurrent, userSign_Up];
          localStorage.setItem("user", JSON.stringify(userCurrent));
          //console.log(JSON.parse(localStorage.getItem("user")));
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
    }
    // else {
    //   if (inputEmail.trim().length === 0 && inputPassword.trim().length === 0) {
    //     setCheckErrorEmail(false);
    //   } else if (inputEmail.trim().length === 0) {
    //     setCheckErrorPassword(true);
    //     setCheckErrorEmail(false);
    //   } else if (inputPassword.trim().length === 0) {
    //     setCheckErrorEmail(true);
    //     setCheckErrorPassword(false);
    //     setPasswordCondition("Please provide your password.");
    //   }
    // }
  };
  //chagne FN
  const handleChangeInputFN = (e) => {
    setInputFirstName(e.target.value);
    setCheckErrorFN(true);
  };
  //change LN
  const handleChangeInputLN = (e) => {
    setInputLastName(e.target.value);
    setCheckErrorLN(true);
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
        <h1 className="font-semibold text-[32px]">REGISTER</h1>
        <div className={style.signUp_input}>
          {/* input first name  */}
          <div className={style.space_line}>
            <input
              value={inputFirstName}
              onChange={(e) => handleChangeInputFN(e)}
              className={style.signUp_input_FN}
              type="First name"
              placeholder="First name"
              autoComplete="username"
              autoCapitalize="off"
              autoCorrect="off"
              dir="auto"
              style={
                focusInputFN
                  ? checkErrorFN
                    ? { border: "2px solid #000" }
                    : { border: "2px solid red" }
                  : { border: "2px solid blue" }
              }
              onFocus={() => setfocusInputFN(false)}
              onBlur={() => setfocusInputFN(true)}
            />
            {checkErrorFN ? (
              ""
            ) : (
              <div
                style={{
                  color: "red",
                  textAlign: "start",
                  margin: "0px 0px 0px 1px",
                }}
              >
                Please provide your first name.
              </div>
            )}
          </div>
          {/* input last name  */}
          <div className={style.space_line}>
            <input
              value={inputLastName}
              onChange={(e) => handleChangeInputLN(e)}
              className={style.signUp_input_FN}
              type="La name"
              placeholder="Last name"
              autoComplete="username"
              autoCapitalize="off"
              autoCorrect="off"
              dir="auto"
              style={
                focusInputLN
                  ? checkErrorLN
                    ? { border: "2px solid #000" }
                    : { border: "2px solid red" }
                  : { border: "2px solid blue" }
              }
              onFocus={() => setfocusInputLN(false)}
              onBlur={() => setfocusInputLN(true)}
            />
            {checkErrorLN ? (
              ""
            ) : (
              <div
                style={{
                  color: "red",
                  textAlign: "start",
                  margin: "0px 0px 0px 1px",
                }}
              >
                Please provide your last name.
              </div>
            )}
          </div>
          {/* input  email  */}
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
                  margin: "0px 0px 0px 1px",
                }}
              >
                Please provide your email.
              </div>
            )}
          </div>
          {/* input  password  */}
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
                  margin: "0px 0px 0px 1px",
                }}
              >
                {passwordCondition}
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
          <div className={`${style.signUp_another_logo}  flex justify-center`}>
            <img src={logoGG} alt="logoGG" className="text-center" />
          </div>
          <div
            className={style.signUp_another_logo}
            style={{ backgroundColor: "#161616" }}
          >
            <i className="bi bi-apple"></i>
          </div>
        </div>
        <div>
          <button
            ref={blockedSubmit}
            onClick={handerLogin}
            className={`${style.signUp_submit} bg-black`}
            type="submit"
          >
            Create account
          </button>
        </div>

        {/* <div className={style.signUp_infor}>
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
        </div> */}

        {/* <div className={style.signUp_signOn}>
          <span onClick={() => dispatch(isUseSingle())}>
            Use single sign-on
          </span>
        </div> */}
        <div style={{ marginTop: "28px" }}>
          <span>Already have an account?</span>
          <span
            className={`${style.signUp_logIn} `}
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
