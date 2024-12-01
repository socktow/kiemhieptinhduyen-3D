import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../Api/api";

// Async Thunk to fetch user info
export const fetchUserInfo = createAsyncThunk(
  "user/fetchUserInfo",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await api.getUserInfo(token);
      console.log("Fetched User Info:", response);
      return response.user; 
    } catch (error) {
      console.error("Error fetching user info:", error);
      return rejectWithValue(error.response?.data || "Error fetching user info");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    status: "idle",
    error: null,
  },
  reducers: {
    clearUserInfo(state) {
      state.userInfo = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userInfo = action.payload;
        state.error = null;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const { clearUserInfo } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
