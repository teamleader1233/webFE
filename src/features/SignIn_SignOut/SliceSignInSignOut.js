import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "SIGN_UP",
};
export const sliceSignInSignOut = createSlice({
  name: "SignIn_SignOut",
  initialState,
  reducers: {
    isSignIn: (state) => {
      console.log("abc");
      state.value = "SIGN_IN";
    },
    isSignUp: (state) => {
      state.value = "SIGN_UP";
    },
    isUseSingle: (state) => {
      state.value = "USE_SINGLE";
    },
    isResetPassword: (state) => {
      state.value = "RESET_PASSWORD";
    },
  },
});
export const { isSignIn, isResetPassword, isSignUp, isUseSingle } =
  sliceSignInSignOut.actions;
export default sliceSignInSignOut.reducer;
