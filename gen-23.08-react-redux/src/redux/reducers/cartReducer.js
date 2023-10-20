import {
  ADD_PRODUCT,
  ON_CHANGE,
  ON_DECREMENT,
  ON_INCREMENT,
  REMOVE_ALL_PRODUCTS,
  REMOVE_PRODUCT,
} from "../actions/types";

const initialState = {
  id: 0,
  products: [],
  totalAmounts: 0,
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const { productId, amounts, subTotal } = action.payload;

      const isProductExist = state.products.find(
        (item) => item.productId === productId,
      );

      if (!isProductExist) {
        return {
          ...state,
          products: [...state.products, action.payload],
          totalAmounts: state.totalAmounts + amounts,
          totalPrice: state.totalPrice + subTotal,
        };
      } else {
        return {
          ...state,
          products: state.products.map((item) =>
            item.productId === productId
              ? {
                  ...item,
                  amounts: item.amounts + amounts,
                  subTotal: item.subTotal + subTotal,
                }
              : item,
          ),
          totalAmounts: state.totalAmounts + amounts,
          totalPrice: state.totalPrice + subTotal,
        };
      }
    }
    case REMOVE_PRODUCT: {
      const { id, amounts, subTotal } = action.payload;

      return {
        ...state,
        products: state.products.filter((item) => item.productId !== id),
        totalAmounts: state.totalAmounts - amounts,
        totalPrice: state.totalPrice - subTotal,
      };
    }
    case REMOVE_ALL_PRODUCTS:
      return {
        ...state,
        products: [],
        totalAmounts: 0,
        totalPrice: 0,
      };
    case ON_INCREMENT: {
      const { id, price } = action.payload;

      return {
        ...state,
        products: state.products.map((item) =>
          item.productId === id
            ? {
                ...item,
                amounts: item.amounts + 1,
                subTotal: item.subTotal + item.product.price,
              }
            : item,
        ),
        totalAmounts: state.totalAmounts + 1,
        totalPrice: state.totalPrice + price,
      };
    }
    case ON_DECREMENT: {
      const { id, price } = action.payload;

      return {
        ...state,
        products: state.products.map((item) =>
          item.productId === id
            ? {
                ...item,
                amounts: item.amounts - 1,
                subTotal: item.subTotal - item.product.price,
              }
            : item,
        ),
        totalAmounts: state.totalAmounts - 1,
        totalPrice: state.totalPrice - price,
      };
    }
    case ON_CHANGE: {
      const { id, amounts, minOrder, maxOrder } = action.payload;

      let vAsNum = parseInt(amounts, 10);
      if (vAsNum <= minOrder || isNaN(vAsNum)) {
        vAsNum = minOrder;
      } else if (vAsNum >= maxOrder) {
        vAsNum = maxOrder;
      }

      return {
        ...state,
        products: state.products.map((item) =>
          item.productId === id
            ? {
                ...item,
                amounts: vAsNum,
                subTotal: vAsNum * item.product.price,
              }
            : item,
        ),
        totalAmounts: state.products.reduce(
          (total, item) => total + item.amounts,
          0,
        ),
        totalPrice: state.products.reduce(
          (total, item) => total + item.subTotal,
          0,
        ),
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
