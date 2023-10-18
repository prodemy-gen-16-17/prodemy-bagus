import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: true,
    role: "user",
    user: {
      id: 2,
    },
  },
});

// export const {} = authSlice.actions;
export default authSlice.reducer;
