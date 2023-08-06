import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "",
};
export const SliceTokenReset = createSlice({
  name: "token reset",
  initialState,
  reducers: {
    setTokenReset: (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
    },
  },
});
export const { setTokenReset } = SliceTokenReset.actions;
export default SliceTokenReset.reducer;
