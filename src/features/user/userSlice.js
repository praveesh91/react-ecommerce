import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { username: "praveesh91" },
  theme: "dracula",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log("login user");
    },
    logoutUser: (state) => {
      console.log("logout user");
    },
    toggleTheme: (state, action) => {
      console.log("toggle theme");
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
