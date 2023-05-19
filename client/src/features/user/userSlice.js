import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token:
    JSON.parse(localStorage.getItem("user"))?.token ||
    JSON.parse(sessionStorage.getItem("user"))?.token ||
    "",
  info:
    JSON.parse(localStorage.getItem("user"))?.info ||
    JSON.parse(sessionStorage.getItem("user"))?.info ||
    {},
};

const cartSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userSign: (state, { payload }) => {
      const { token, info, rememberMe } = payload;
      state.token = token;
      state.info = info;
      if (rememberMe) {
        localStorage.setItem("user", JSON.stringify({ token, info }));
      } else {
        sessionStorage.setItem("user", JSON.stringify({ token, info }));
      }

      console.log(state.remember);
    },

    userLogout: (state) => {
      state.token = "";
      state.info = {};
      console.log(state.remember);
      localStorage.removeItem("user");
      sessionStorage.removeItem("user");
    },
  },
});

export default cartSlice.reducer;

export const { userSign, userLogout } = cartSlice.actions;
