import { createSlice } from "@reduxjs/toolkit";

const themes = {
  light: "cupcake",
  dark: "dark",
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.winter;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initialState = {
  user: { username: "praveesh91" },
  theme: getThemeFromLocalStorage(),
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
      const { dark, light } = themes;
      state.theme = state.theme === dark ? light : dark;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
