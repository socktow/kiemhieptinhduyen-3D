import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./PageSlice";
import adminReducer from "./AdminSlice";
import userReducer from "./UserSlice";

const store = configureStore({
  reducer: {
    page: pageReducer,
    admin: adminReducer,
    user: userReducer,
  },
});

export default store;
