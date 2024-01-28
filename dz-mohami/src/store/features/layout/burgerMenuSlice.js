import { createSlice } from "@reduxjs/toolkit";
const burgerMenuSlice = createSlice({
  name: "burgerSlice",
  initialState: {
    isShown: false,
  },
  reducers: {
    toggleBurgerMenu: (state) => {
      state.isShown = !state.isShown;
    },
  },
});
export const { toggleBurgerMenu } = burgerMenuSlice.actions;
export default burgerMenuSlice.reducer;
