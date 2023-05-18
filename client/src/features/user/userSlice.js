import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token:
    JSON.parse(localStorage.getItem("user"))?.token ||
    JSON.parse(sessionStorage.getItem("user"))?.token ||
    "",
  info: {
    firstName:
      JSON.parse(localStorage.getItem("user"))?.firstName ||
      JSON.parse(sessionStorage.getItem("user"))?.firstName ||
      "",
  },
  remember: false,
};

const cartSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userSign: (state, { payload }) => {
      const { token, firstName, remember } = payload;
      state.token = token;
      state.info.firstName = firstName;
      if (remember) {
        localStorage.setItem("user", JSON.stringify({ token, firstName }));
        state.remember = true;
      } else {
        sessionStorage.setItem("user", JSON.stringify({ token, firstName }));
        state.remember = false;
      }
    },

    userLogout: (state) => {
      state.token = "";
      state.info.firstName = "";
      console.log(state.remember);
      if (state.remember) {
        localStorage.removeItem("user");
      } else {
        sessionStorage.removeItem("user");
      }
      state.remember = false;
    },
  },
});

export default cartSlice.reducer;

export const { userSign, userLogout } = cartSlice.actions;
