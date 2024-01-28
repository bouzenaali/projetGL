import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const clientRegisterSlice = createSlice({
  name: "clientSlice",
  initialState,
  reducers: {
    setClientRegisterInfo(state, { payload: { name, value } }) {
      state[name] = value;
    },
  },
});
export default clientRegisterSlice.reducer;

export const { setClientRegisterInfo } = clientRegisterSlice.actions;
