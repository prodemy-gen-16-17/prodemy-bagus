import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: true,
    user: {
      id: 1,
      role: "user",
    },
  },
});

// export const {} = authSlice.actions;
export default authSlice.reducer;
