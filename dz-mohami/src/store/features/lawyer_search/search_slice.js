import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  date: "",
  wilayaId: "",
  categoryId: "",
  search: "",
  page: 1,
};
const searchLawyerSlice = createSlice({
  name: "searchLawyer",
  initialState,
  reducers: {
    setSearchLawyerInfo(state, { payload: { name, value } }) {
      state[name] = value;
    },
  },
});

export const { setSearchLawyerInfo } = searchLawyerSlice.actions;

export default searchLawyerSlice.reducer;
