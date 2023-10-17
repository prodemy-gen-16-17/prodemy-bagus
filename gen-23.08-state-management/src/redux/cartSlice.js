import { createSlice } from "@reduxjs/toolkit";

// Utility function for updating products array
const updateProducts = (products, id, updateFn) =>
  products.map((product) => (product.id === id ? updateFn(product) : product));

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalAmounts: 0,
    totalPrice: 0,
  },
  reducers: {
    addProduct: (state, { payload }) => {
      const { amounts, totalPrice } = payload;

      state.products.push(payload);
      state.totalAmounts += amounts;
      state.totalPrice += totalPrice;
    },
    removeProduct: (state, { payload }) => {
      const { id, amounts, totalPrice } = payload;

      state.products = state.products.filter((product) => product.id !== id);
      state.totalAmounts -= amounts;
      state.totalPrice -= totalPrice;
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
        totalPrice: product.totalPrice + product.price,
      }));

      state.totalAmounts += 1;
      state.totalPrice += price;
    },
    onDecrement: (state, { payload }) => {
      const { id, price } = payload;

      state.products = updateProducts(state.products, id, (product) => ({
        ...product,
        amounts: product.amounts - 1,
        totalPrice: product.totalPrice - product.price,
      }));

      state.totalAmounts -= 1;
      state.totalPrice -= price;
    },
    onChange: (state, { payload }) => {
      const { id, amounts } = payload;

      state.products = updateProducts(state.products, id, (product) => ({
        ...product,
        amounts: amounts,
        totalPrice: amounts * product.price,
      }));

      state.totalAmounts = state.products.reduce(
        (total, product) => total + product.amounts,
        0,
      );
      state.totalPrice = state.products.reduce(
        (total, product) => total + product.totalPrice,
        0,
      );
    },
  },
});

export const {
  addProduct,
  removeProduct,
  removeAllProducts,
  onIncrement,
  onDecrement,
  onChange,
} = cartSlice.actions;
export default cartSlice.reducer;
