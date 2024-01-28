import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  newCommentRating: 0,
  newCommentContent: "",
};

const singleLawyerSlice = createSlice({
  name: "singleLawyer",
  initialState,
  reducers: {
    setNewCommentInfo: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
  },
});
export default singleLawyerSlice.reducer;

export const { setNewCommentInfo } = singleLawyerSlice.actions;
