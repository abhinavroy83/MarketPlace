import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  token: null,
  location: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.token = action.payload.token;
      state.location = action.payload.location;
    },
    logout: (state) => {
      state.status = false;
      state.token = null;
      state.location = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
