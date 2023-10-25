import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    items: [],
    totalAmounts: 0,
    subTotalProductPrice: 0,

    address: "",
    phone: "",
    "payment-method": null,
    "payment-methodId": 0,
    "shipping-method": null,
    "shipping-methodId": 0,
    insurance: false,

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
        state.subTotalProductPrice = state.subTotalProductPrice + subTotal;
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
        state.subTotalProductPrice += subTotal;
        state.totalPrice += subTotal;
      }
    },
    addOrder: (state, { payload }) => {
      state.items = payload.items;
      state.totalAmounts = payload.totalAmounts;
      state.subTotalProductPrice = payload.subTotalProductPrice;
      state.totalPrice = payload.subTotalProductPrice;
    },
    updateOrder: (state, { payload }) => {
      state.address = payload.address;
      state.phone = payload.phone;
      state["payment-method"] = payload["payment-method"];
      state["payment-methodId"] = payload["payment-methodId"];
      state["shipping-method"] = payload["shipping-method"];
      state["shipping-methodId"] = payload["shipping-methodId"];
      state.insurance = payload.insurance;
      state.totalPrice = payload.totalPrice;
    },
    removeOrder: (state) => {
      state.items = [];
      state.totalAmounts = 0;
      state.subTotalProductPrice = 0;

      state.address = "";
      state.phone = "";
      state["payment-method"] = null;
      state["payment-methodId"] = 0;
      state["shipping-method"] = null;
      state["shipping-methodId"] = 0;
      state.insurance = false;

      state.totalPrice = 0;
    },
  },
});

export const { addItem, addOrder, updateOrder, removeOrder } =
  orderSlice.actions;
export default orderSlice.reducer;
