import { createSlice } from "@reduxjs/toolkit";

// Utility function for updating products array
const updateProducts = (products, id, updateFn) =>
  products.map((product) => (product.id === id ? updateFn(product) : product));

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    id: 0,
    products: [],
    totalAmounts: 0,
    totalPrice: 0,
  },
  reducers: {
    addProduct: (state, { payload }) => {
      const { id, price, amounts, subTotal } = payload;

      const isProductExist = state.products.find(
        (product) => product.id === id,
      );

      if (!isProductExist) {
        state.products.push(payload);
        state.totalAmounts += amounts;
        state.subTotal += subTotal;
      } else {
        // onIncrement
        state.products = updateProducts(state.products, id, (product) => ({
          ...product,
          amounts: product.amounts + 1,
          subTotal: product.subTotal + product.price,
        }));

        state.totalAmounts += 1;
        state.totalPrice += price;
      }
    },
    removeProduct: (state, { payload }) => {
      const { id, amounts, subTotal } = payload;

      state.products = state.products.filter((product) => product.id !== id);
      state.totalAmounts -= amounts;
      state.totalPrice -= subTotal;
    },
    removeAllProducts: (state) => {
      state.products = [];
      state.totalAmounts = 0;
      state.totalPrice = 0;
    },
    onIncrement: (state, { payload }) => {
      const { id, price } = payload;

      state.products = updateProducts(state.products, id, (product) => ({
        ...product,
        amounts: product.amounts + 1,
        subTotal: product.subTotal + product.price,
      }));

      state.totalAmounts += 1;
      state.totalPrice += price;
    },
    onDecrement: (state, { payload }) => {
      const { id, price } = payload;

      state.products = updateProducts(state.products, id, (product) => ({
        ...product,
        amounts: product.amounts - 1,
        subTotal: product.subTotal - product.price,
      }));

      state.totalAmounts -= 1;
      state.totalPrice -= price;
    },
    onChange: (state, { payload }) => {
      const { id, amounts, minOrder, maxOrder } = payload;

      let vAsNum = parseInt(amounts, 10);
      if (vAsNum <= minOrder || isNaN(vAsNum)) {
        vAsNum = minOrder;
      } else if (vAsNum >= maxOrder) {
        vAsNum = maxOrder;
      }

      state.products = updateProducts(state.products, id, (product) => ({
        ...product,
        amounts: vAsNum,
        subTotal: vAsNum * product.price,
      }));

      state.totalAmounts = state.products.reduce(
        (total, product) => total + product.amounts,
        0,
      );
      state.totalPrice = state.products.reduce(
        (total, product) => total + product.subTotal,
        0,
      );
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchCartByUserId.fulfilled, (state, { payload }) => {
  //     if (!payload) {
  //       state.id = 0;
  //       state.products = [];
  //       state.totalAmounts = 0;
  //       state.totalPrice = 0;
  //     } else {
  //       state.id = payload.id;
  //       state.products = payload.products;
  //       state.totalAmounts = payload.totalAmounts;
  //       state.totalPrice = payload.totalPrice;
  //     }
  //   });
  // },
});

// https://redux-toolkit.js.org/usage/usage-guide#async-requests-with-createasyncthunk
// export const fetchCartByUserId = createAsyncThunk(
//   "cart/fetchCartByUserId",
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();

//     const auth = state.auth;
//     if (!auth.isLoggedIn) {
//       return {};
//     }

//     try {
//       const cartResponse = await axios.get(
//         `http://localhost:3000/carts?userId=${auth.user.id}&_embed=cartItems`,
//       );

//       const cartResponseData = cartResponse.data[0];
//       if (!cartResponseData) {
//         return {};
//       }

//       const cartItemsResponse = await axios.get(
//         `http://localhost:3000/carts/${cartResponseData.id}/cartItems?_expand=product`,
//       );

//       const cartItemsResponseData = cartItemsResponse.data;

//       return {
//         id: cartResponseData.id,
//         products: cartItemsResponseData,
//         totalAmounts: cartItemsResponseData.reduce(
//           (total, product) => total + product.amounts,
//           0,
//         ),
//         totalPrice: cartItemsResponseData.reduce(
//           (total, product) => total + product.subTotal,
//           0,
//         ),
//       };
//     } catch (error) {
//       console.log(error);
//       return {};
//     }
//   },
// );

// export const addProductAsync = createAsyncThunk(
//   "cart/addProductAsync",
//   async (product, thunkAPI) => {
//     const state = thunkAPI.getState();

//     const auth = state.auth;
//     // check if user is not logged in
//     if (!auth.isLoggedIn) {
//       return product;
//     }

//     //  if user logged in, try post cart item
//     try {
//       const payload = {};
//       await axios.post("http://localhost:3000/cartItem", payload);
//       return product;
//     } catch (error) {
//       console.log(error);
//       return product;
//     }
//   },
// );

export const {
  addProduct,
  removeProduct,
  removeAllProducts,
  onIncrement,
  onDecrement,
  onChange,
} = cartSlice.actions;
export default cartSlice.reducer;
