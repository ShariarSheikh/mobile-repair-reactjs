import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  },

  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;

      localStorage.setItem("user", JSON.stringify(state.user));
    },
    removeUser: (state, action) => {
      state.user = null;

      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

export const { getUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
