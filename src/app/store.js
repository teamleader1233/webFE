import { configureStore } from "@reduxjs/toolkit";
import SliceSignInSignOut from "../features/SignIn_SignOut/SliceSignInSignOut";
import SliceTokenReset from "../features/Token/SliceTokenReset";
export const store = configureStore({
  reducer: {
    signIn_sign_out: SliceSignInSignOut,
    tokenRefresh: SliceTokenReset,
  },
});
