import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./PageSlice";
import adminReducer from "./AdminSlice";
const store = configureStore({
  reducer: {
    page: pageReducer,
    admin: adminReducer,
  },
});

export default store;
