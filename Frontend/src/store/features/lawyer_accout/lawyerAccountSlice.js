import { createSlice } from "@reduxjs/toolkit";
import { add } from "date-fns";
const initialState = {
  image: "",
  fullName: "",
  email: "",
  wilaya: "",
  commune: "",
  position: {
    lat: 36.66308322957054,
    lng: 4.913077354431153,
  },
  phone: "",
  password: "password",
  confirmPassword: "password",
  experienceYears: "",
  category: "",
  description: "",
};
const lawyerAccountSlice = createSlice({
  name: "lawyerAccount",
  initialState,
  reducers: {
    setLawyerAccountInfo: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
  },
});

export const { setLawyerAccountInfo } = lawyerAccountSlice.actions;
export default lawyerAccountSlice.reducer;
