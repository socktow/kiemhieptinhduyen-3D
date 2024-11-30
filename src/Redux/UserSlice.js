import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../Api/api"; // Assuming the API file is named Api.js

// Async Thunk to fetch user info
export const fetchUserInfo = createAsyncThunk(
  "user/fetchUserInfo",
  async (username, { rejectWithValue }) => {
    try {
      const response = await api.getUserInfo(username);
      return response; // Return the response data directly
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching user info");
    }
  }
);

// Create a user slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    status: "idle",
    error: null,
  },
  reducers: {
    // You can add synchronous reducers here if needed
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
        state.userInfo = action.payload; // Save the fetched user info
        state.error = null;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; // Save the error message
      });
  },
});

// Export the synchronous actions
export const { clearUserInfo } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
