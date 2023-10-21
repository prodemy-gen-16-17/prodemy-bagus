import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    items: [],
    totalAmounts: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, { payload }) => {
      const { productId, amounts, subTotal } = payload;

      const isItemExist = state.items.find(
        (item) => item.productId === productId,
      );

      if (!isItemExist) {
        state.items = [...state.items, payload];
        state.totalAmounts = state.totalAmounts + amounts;
        state.totalPrice = state.totalPrice + subTotal;
      } else {
        // onIncrement
        state.items = state.items.map((item) =>
          item.productId === productId
            ? {
                ...item,
                amounts: item.amounts + amounts,
                subTotal: item.subTotal + subTotal,
              }
            : item,
        );

        state.totalAmounts += amounts;
        state.totalPrice += subTotal;
      }
    },
    addOrder: (state, { payload }) => {
      state.items = payload.items;
      state.totalAmounts = payload.totalAmounts;
      state.totalPrice = payload.totalPrice;
    },
    removeOrder: (state) => {
      state.items = [];
      state.totalAmounts = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, addOrder, removeOrder } = orderSlice.actions;
export default orderSlice.reducer;
