import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { createItem } from "../../api/api";
import { LOGIN } from "../../api/routes";

function initialState() {
  const user = JSON.parse(localStorage.getItem("user"));
  const accessToken = localStorage.getItem("accessToken");
  console.log("user", user, "\naccessToken", accessToken);

  if (!user || !accessToken || accessToken === "") {
    return {
      isLoggedIn: false,
      user: null,
      accessToken: null,
    };
  }

  return {
    isLoggedIn: true,
    user: user,
    accessToken: accessToken,
  };
}

const authSlice = createSlice({
  name: "auth",
  initialState: initialState(),
  reducers: {
    logout: (state) => {
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");

      state.isLoggedIn = false;
      state.user = null;
      state.accessToken = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      localStorage.setItem("user", JSON.stringify(payload.user));
      localStorage.setItem("accessToken", payload.accessToken);

      state.isLoggedIn = true;
      state.user = payload.user;
      state.accessToken = payload.accessToken;
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      state.isLoggedIn = false;
      console.log(payload);
    });
  },
});

export const login = createAsyncThunk("auth/login", async (data) => {
  try {
    const response = await createItem(LOGIN, data);
    return response;
  } catch (error) {
    return error.message;
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
