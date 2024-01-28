import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  step: 1,
  fullName: "",
  wilaya: "",
  commune: "",
  position: {
    lat: 36.66308322957054,
    lng: 4.913077354431153,
  },
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
  experienceYears: "",
  category: "",
  description: "",
};
const registerLawyerSlice = createSlice({
  name: "registerLawyer",
  initialState,
  reducers: {
    setRegisterLawyerInfo: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
  },
});
export const { setRegisterLawyerInfo } = registerLawyerSlice.actions;
export default registerLawyerSlice.reducer;
