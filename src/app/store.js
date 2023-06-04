import { configureStore } from "@reduxjs/toolkit";
import SliceSignInSignOut from "../features/SignIn_SignOut/SliceSignInSignOut";
export const store = configureStore({
  reducer: {
    signIn_sign_out: SliceSignInSignOut,
  },
});
