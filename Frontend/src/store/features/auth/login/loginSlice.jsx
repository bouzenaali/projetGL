import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: "",
  password: "",
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginInfo: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
  },
});
export default loginSlice.reducer;
export const { setLoginInfo } = loginSlice.actions;
