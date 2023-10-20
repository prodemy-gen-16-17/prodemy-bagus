import axios from "axios";
import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

import { AuthContext } from "./AuthProvider";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { auth } = useContext(AuthContext);

  const [cart, setCart] = useState({
    id: 0,
    products: [],
    totalAmounts: 0,
    totalPrice: 0,
  });

  const API_BASE_URL = "http://localhost:3000/cartItems";

  const updateProducts = (products, productId, updateFn) =>
    products.map((item) =>
      item.productId === productId ? updateFn(item) : item,
    );

  const addProduct = async (payload) => {
    const { amounts, subTotal, maxOrder, productId } = payload;

    const isProductExist = cart.products.find(
      (item) => item.productId === productId,
    );

    // If user is logged in, post data to server
    if (auth.isLoggedIn) {
      try {
        let response;

        if (!isProductExist) {
          if (cart.id === -1) {
            response = await axios.post("http://localhost:3000/carts", {
              userId: auth.user.id,
            });

            response = await axios.post(API_BASE_URL, {
              cartId: response.data.id,
              productId: productId,
              amounts: amounts,
              subTotal: subTotal,
              maxOrder: maxOrder,
            });
          } else {
            response = await axios.post(API_BASE_URL, {
              cartId: cart.id,
              productId: productId,
              amounts: amounts,
              subTotal: subTotal,
              maxOrder: maxOrder,
            });
          }

          console.log("addProductWhenNotExistedIsLoggedIn", response.data);
        } else {
          response = await axios.patch(`${API_BASE_URL}/${isProductExist.id}`, {
            cartId: isProductExist.cartId,
            productId: isProductExist.productId,
            amounts: isProductExist.amounts + amounts,
            subTotal: isProductExist.subTotal + subTotal,
            maxOrder: isProductExist.maxOrder,
          });

          console.log("addProductWhenOnIncrementIsLoggedIn", response.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    let newCart;
    if (!isProductExist) {
      console.log("addProductWhenNotExisted", payload);
      newCart = {
        ...cart,
        products: [...cart.products, payload],
      };
    } else {
      // onIncrement
      console.log("addProductOnIncrement", payload);
      newCart = {
        ...cart,
        products: updateProducts(cart.products, productId, (item) => ({
          ...item,
          amounts: item.amounts + amounts,
          subTotal: item.subTotal + subTotal,
        })),
      };
    }

    newCart.totalAmounts += amounts;
    newCart.totalPrice += subTotal;
    setCart(newCart);
  };

  const removeProduct = async (payload) => {
    const { id, amounts, subTotal } = payload;

    // If user is logged in, post data to server
    if (auth.isLoggedIn) {
      const isProductExist = cart.products.find(
        (item) => item.productId === id,
      );

      try {
        const response = await axios.delete(
          `${API_BASE_URL}/${isProductExist.id}`,
        );

        console.log("removeProductWhenIsLoggedIn", response.data);
      } catch (error) {
        console.error(error);
      }
    }

    console.log("removeProduct", payload);
    setCart({
      ...cart,
      products: cart.products.filter((item) => item.productId !== id),
      totalAmounts: cart.totalAmounts - amounts,
      totalPrice: cart.totalPrice - subTotal,
    });
  };

  const removeAllProducts = async () => {
    // If user is logged in, post data to server
    if (auth.isLoggedIn && cart.id !== -1) {
      try {
        const cartItemRequests = cart.products.map((item) => {
          return axios.delete(`${API_BASE_URL}/${item.id}`);
        });

        const cartItemResponses = await Promise.all(cartItemRequests);

        const cartResponse = await axios.delete(
          `http://localhost:3000/carts/${cart.id}`,
        );

        console.log(
          "removeAllProductWhenIsLoggedIn",
          cartItemResponses,
          cartResponse.data,
        );
      } catch (error) {
        console.error(error);
      }
    }

    console.log("removeAllProducts");
    setCart({
      ...cart,
      products: [],
      totalAmounts: 0,
      totalPrice: 0,
    });
  };

  const onIncrement = async (payload) => {
    const { id, price } = payload;

    // If user is logged in, post data to server
    if (auth.isLoggedIn) {
      const isProductExist = cart.products.find(
        (item) => item.productId === id,
      );

      try {
        const response = await axios.patch(
          `${API_BASE_URL}/${isProductExist.id}`,
          {
            cartId: isProductExist.cartId,
            productId: isProductExist.productId,
            amounts: isProductExist.amounts + 1,
            subTotal: isProductExist.subTotal + price,
            maxOrder: isProductExist.maxOrder,
          },
        );

        console.log("onIncrementWhenIsLoggedIn", response.data);
      } catch (error) {
        console.error(error);
      }
    }

    console.log("onIncrement", payload);
    setCart({
      ...cart,
      products: updateProducts(cart.products, id, (item) => ({
        ...item,
        amounts: item.amounts + 1,
        subTotal: item.subTotal + item.product.price,
      })),
      totalAmounts: cart.totalAmounts + 1,
      totalPrice: cart.totalPrice + price,
    });
  };

  const onDecrement = async (payload) => {
    const { id, price } = payload;

    // If user is logged in, post data to server
    if (auth.isLoggedIn) {
      const isProductExist = cart.products.find(
        (item) => item.productId === id,
      );

      try {
        const response = await axios.patch(
          `${API_BASE_URL}/${isProductExist.id}`,
          {
            cartId: isProductExist.cartId,
            productId: isProductExist.productId,
            amounts: isProductExist.amounts - 1,
            subTotal: isProductExist.subTotal - price,
            maxOrder: isProductExist.maxOrder,
          },
        );

        console.log("onDecrementWhenIsLoggedIn", response.data);
      } catch (error) {
        console.error(error);
      }
    }

    console.log("onDecrement", payload);
    setCart({
      ...cart,
      products: updateProducts(cart.products, id, (item) => ({
        ...item,
        amounts: item.amounts - 1,
        subTotal: item.subTotal - item.product.price,
      })),
      totalAmounts: cart.totalAmounts - 1,
      totalPrice: cart.totalPrice - price,
    });
  };

  const onChange = async (payload) => {
    const { id, amounts, minOrder, maxOrder } = payload;

    let vAsNum = parseInt(amounts, 10);
    if (vAsNum <= minOrder || isNaN(vAsNum)) {
      vAsNum = minOrder;
    } else if (vAsNum >= maxOrder) {
      vAsNum = maxOrder;
    }

    let productList = updateProducts(cart.products, id, (item) => ({
      ...item,
      amounts: vAsNum,
      subTotal: vAsNum * item.product.price,
    }));

    // If user is logged in, post data to server
    if (auth.isLoggedIn) {
      const isProductExist = cart.products.find(
        (item) => item.productId === id,
      );

      try {
        const response = await axios.patch(
          `${API_BASE_URL}/${isProductExist.id}`,
          {
            cartId: isProductExist.cartId,
            productId: isProductExist.productId,
            amounts: vAsNum,
            subTotal: vAsNum * isProductExist.price,
            maxOrder: isProductExist.maxOrder,
          },
        );

        console.log("removeProductWhenIsLoggedIn", response.data);
      } catch (error) {
        console.error(error);
      }
    }

    console.log("onChange", payload);
    setCart({
      ...cart,
      products: productList,
      totalAmounts: productList.reduce(
        (total, item) => total + item.amounts,
        0,
      ),
      totalPrice: productList.reduce((total, item) => total + item.subTotal, 0),
    });
  };

  const contextValue = {
    cart,
    setCart,
    addProduct,
    removeProduct,
    removeAllProducts,
    onIncrement,
    onDecrement,
    onChange,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};
