import {
  ADD_PRODUCT,
  ON_CHANGE,
  ON_DECREMENT,
  ON_INCREMENT,
  REMOVE_ALL_PRODUCTS,
  REMOVE_PRODUCT,
} from "./types";

export const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});

export const removeProduct = (payload) => ({
  type: REMOVE_PRODUCT,
  payload,
});

export const removeAllProducts = () => ({
  type: REMOVE_ALL_PRODUCTS,
});

export const onIncrement = (payload) => ({
  type: ON_INCREMENT,
  payload,
});

export const onDecrement = (payload) => ({
  type: ON_DECREMENT,
  payload,
});

export const onChange = (payload) => ({
  type: ON_CHANGE,
  payload,
});
