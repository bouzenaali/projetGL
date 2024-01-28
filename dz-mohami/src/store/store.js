import { configureStore } from "@reduxjs/toolkit";
import searchLawyerReducer from "./features/lawyer_search/search_slice";
import burgerReducer from "./features/layout/burgerMenuSlice";
import singleLawyerReducer from "./features/single_lawyer/singleLawyerSlice";
import loginReducer from "./features/auth/login/loginSlice";
import resetPasswordReducer from "./features/auth/reset-password/resetPasswordSlice";
import clientRegisterReducer from "./features/auth/register-client/clientRegisterSlice";
import lawyerRegisterReducer from "./features/auth/register-lawyer/registerLawyerSlice";
import lawyerAccountReducer from "./features/lawyer_accout/lawyerAccountSlice";
const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    searchLawyer: searchLawyerReducer,
    burgerMenu: burgerReducer,
    singleLawyer: singleLawyerReducer,
    login: loginReducer,
    resetPassword: resetPasswordReducer,
    clientRegister: clientRegisterReducer,
    lawyerRegister: lawyerRegisterReducer,
    lawyerAccount: lawyerAccountReducer,
  },
});
export default store;
