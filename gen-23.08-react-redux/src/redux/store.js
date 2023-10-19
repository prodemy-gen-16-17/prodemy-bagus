// import { configureStore } from "@reduxjs/toolkit";

// import authReducer from "./authSlice";
// import cartReducer from "./cartSlice";

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     cart: cartReducer,
//   },
// });

import { createStore } from "redux";

import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
