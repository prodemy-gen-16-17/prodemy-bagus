import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { createItem, deleteItem, getAllItems, updateItem } from "../../api/api";
import { CART_ITEMS, CARTS } from "../../api/routes";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isLoading: false,

    cartId: 0,
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
    removeItem: (state, { payload }) => {
      const { id: productId, amounts, subTotal } = payload;

      state.items = state.items.filter((item) => item.productId !== productId);
      state.totalAmounts -= amounts;
      state.totalPrice -= subTotal;
    },
    removeAllItems: (state) => {
      state.items = [];
      state.totalAmounts = 0;
      state.totalPrice = 0;
    },
    onIncrement: (state, { payload }) => {
      const { id: productId, price } = payload;

      state.items = state.items.map((item) =>
        item.productId === productId
          ? {
              ...item,
              amounts: item.amounts + 1,
              subTotal: item.subTotal + price,
            }
          : item,
      );

      state.totalAmounts += 1;
      state.totalPrice += price;
    },
    onDecrement: (state, { payload }) => {
      const { id: productId, price } = payload;

      state.items = state.items.map((item) =>
        item.productId === productId
          ? {
              ...item,
              amounts: item.amounts - 1,
              subTotal: item.subTotal - price,
            }
          : item,
      );

      state.totalAmounts -= 1;
      state.totalPrice -= price;
    },
    onChange: (state, { payload }) => {
      const { id: productId, amounts, price } = payload;

      state.items = state.items.map((item) =>
        item.productId === productId
          ? {
              ...item,
              amounts: amounts,
              subTotal: amounts * price,
            }
          : item,
      );

      state.totalAmounts = state.items.reduce(
        (total, item) => total + item.amounts,
        0,
      );
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.subTotal,
        0,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartByUserId.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCartByUserId.fulfilled, (state, { payload }) => {
      state.isLoading = false;

      state.cartId = payload.cartId;
      state.items = payload.items;
      state.totalAmounts = payload.totalAmounts;
      state.totalPrice = payload.totalPrice;
    });
    builder.addCase(fetchCartByUserId.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(addItemAsync.fulfilled, (state, { payload }) => {
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
    });

    builder.addCase(removeItemAsync.fulfilled, (state, { payload }) => {
      const { id: productId, amounts, subTotal } = payload;

      state.items = state.items.filter((item) => item.productId !== productId);
      state.totalAmounts -= amounts;
      state.totalPrice -= subTotal;
    });

    builder.addCase(removeAllItemsAsync.fulfilled, (state) => {
      state.items = [];
      state.totalAmounts = 0;
      state.totalPrice = 0;
    });

    builder.addCase(onIncrementAsync.fulfilled, (state, { payload }) => {
      const { id: productId, price } = payload;

      state.items = state.items.map((item) =>
        item.productId === productId
          ? {
              ...item,
              amounts: item.amounts + 1,
              subTotal: item.subTotal + price,
            }
          : item,
      );

      state.totalAmounts += 1;
      state.totalPrice += price;
    });

    builder.addCase(onDecrementAsync.fulfilled, (state, { payload }) => {
      const { id: productId, price } = payload;

      state.items = state.items.map((item) =>
        item.productId === productId
          ? {
              ...item,
              amounts: item.amounts - 1,
              subTotal: item.subTotal - price,
            }
          : item,
      );

      state.totalAmounts -= 1;
      state.totalPrice -= price;
    });

    builder.addCase(onChangeAsync.fulfilled, (state, { payload }) => {
      const { id: productId, amounts, price } = payload;

      state.items = state.items.map((item) =>
        item.productId === productId
          ? {
              ...item,
              amounts: amounts,
              subTotal: amounts * price,
            }
          : item,
      );

      state.totalAmounts = state.items.reduce(
        (total, item) => total + item.amounts,
        0,
      );
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.subTotal,
        0,
      );
    });
  },
});

// https://redux-toolkit.js.org/usage/usage-guide#async-requests-with-createasyncthunk
export const fetchCartByUserId = createAsyncThunk(
  "cart/fetchCartByUserId",
  async (_, thunkAPI) => {
    const { auth, cart } = thunkAPI.getState();

    if (!auth.isLoggedIn) {
      return cart;
    }

    try {
      const cartResponse = await getAllItems(`${CARTS}?userId=${auth.user.id}`);

      let cartData = cartResponse[0];
      if (!cartData) {
        cartData = await createItem(CARTS, {
          userId: auth.user.id,
        });
      }

      const cartItemsData = await getAllItems(
        `${CARTS}/${cartData.id}/cart-items?_expand=product`,
      );

      return {
        cartId: cartData.id,
        items: cartItemsData,
        totalAmounts: cartItemsData.reduce(
          (total, item) => total + item.amounts,
          0,
        ),
        totalPrice: cartItemsData.reduce(
          (total, item) => total + item.subTotal,
          0,
        ),
      };
    } catch (error) {
      console.log(error);
    }
  },
);

export const addItemAsync = createAsyncThunk(
  "cart/addItemAsync",
  async (item, thunkAPI) => {
    const { amounts, cartId, productId, subTotal } = item;

    const { auth, cart } = thunkAPI.getState();

    if (!auth.isLoggedIn) {
      return item;
    }

    const isItemExist = cart.items.find((item) => item.productId === productId);

    try {
      if (!isItemExist) {
        await createItem(CART_ITEMS, {
          amounts,
          cartId,
          productId,
          subTotal,
        });
      } else {
        await updateItem(`${CART_ITEMS}/${isItemExist.id}`, {
          amounts: isItemExist.amounts + amounts,
          cartId,
          createdAt: isItemExist.createdAt,
          productId,
          subTotal: isItemExist.subTotal + subTotal,
        });
      }

      return item;
    } catch (error) {
      console.log(error);
    }
  },
);

export const removeItemAsync = createAsyncThunk(
  "cart/removeItemAsync",
  async (item, thunkAPI) => {
    const { id: productId } = item;

    const { auth, cart } = thunkAPI.getState();

    if (!auth.isLoggedIn) {
      return item;
    }

    const itemData = cart.items.find((item) => item.productId === productId);

    try {
      await deleteItem(`${CART_ITEMS}/${itemData.id}`);

      return item;
    } catch (error) {
      console.log(error);
    }
  },
);

export const removeAllItemsAsync = createAsyncThunk(
  "cart/removeAllItemAsync",
  async (_, thunkAPI) => {
    const { auth, cart } = thunkAPI.getState();

    if (!auth.isLoggedIn) {
      return;
    }

    const cartItemRequests = cart.items.map((item) => {
      return deleteItem(`${CART_ITEMS}/${item.id}`);
    });

    try {
      await Promise.all(cartItemRequests);

      return;
    } catch (error) {
      console.log(error);
    }
  },
);

export const onIncrementAsync = createAsyncThunk(
  "cart/onIncrementAsync",
  async (item, thunkAPI) => {
    const { id: productId, price } = item;

    const { auth, cart } = thunkAPI.getState();

    if (!auth.isLoggedIn) {
      return item;
    }

    const itemData = cart.items.find((item) => item.productId === productId);

    try {
      await updateItem(`${CART_ITEMS}/${itemData.id}`, {
        amounts: itemData.amounts + 1,
        cartId: cart.cartId,
        createdAt: itemData.createdAt,
        productId,
        subTotal: itemData.subTotal + price,
      });

      return item;
    } catch (error) {
      console.log(error);
    }
  },
);

export const onDecrementAsync = createAsyncThunk(
  "cart/onDecrementAsync",
  async (item, thunkAPI) => {
    const { id: productId, price } = item;

    const { auth, cart } = thunkAPI.getState();

    if (!auth.isLoggedIn) {
      return item;
    }

    const itemData = cart.items.find((item) => item.productId === productId);

    try {
      await updateItem(`${CART_ITEMS}/${itemData.id}`, {
        amounts: itemData.amounts - 1,
        cartId: cart.cartId,
        createdAt: itemData.createdAt,
        productId,
        subTotal: itemData.subTotal - price,
      });

      return item;
    } catch (error) {
      console.log(error);
    }
  },
);

export const onChangeAsync = createAsyncThunk(
  "cart/onChangeAsync",
  async (item, thunkAPI) => {
    const { id: productId, amounts, price } = item;

    const { auth, cart } = thunkAPI.getState();

    if (!auth.isLoggedIn) {
      return item;
    }

    const itemData = cart.items.find((item) => item.productId === productId);

    try {
      await updateItem(`${CART_ITEMS}/${itemData.id}`, {
        amounts: amounts,
        cartId: cart.cartId,
        createdAt: itemData.createdAt,
        productId,
        subTotal: amounts * price,
      });

      return item;
    } catch (error) {
      console.log(error);
    }
  },
);

export const {
  addItem,
  removeItem,
  removeAllItems,
  onIncrement,
  onDecrement,
  onChange,
} = cartSlice.actions;
export default cartSlice.reducer;
