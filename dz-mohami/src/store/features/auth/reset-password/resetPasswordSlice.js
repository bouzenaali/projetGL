import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: "",
  otp: "",
  newPassword: "",
  confirmPassword: "",
};
const resetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState,
  reducers: {
    setResetPasswordInfo: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
  },
});
export const { setResetPasswordInfo } = resetPasswordSlice.actions;
export default resetPasswordSlice.reducer;
