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
    products.map((product) =>
      product.productId === productId ? updateFn(product) : product,
    );

  const addProduct = async (payload) => {
    const { amounts, totalPrice, maxOrder, productId } = payload;

    const isProductExist = cart.products.find(
      (product) => product.productId === productId,
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
              totalPrice: totalPrice,
              maxOrder: maxOrder,
            });
          } else {
            response = await axios.post(API_BASE_URL, {
              cartId: cart.id,
              productId: productId,
              amounts: amounts,
              totalPrice: totalPrice,
              maxOrder: maxOrder,
            });
          }

          console.log("addProductWhenNotExistedIsLoggedIn", response.data);
        } else {
          response = await axios.patch(`${API_BASE_URL}/${isProductExist.id}`, {
            cartId: isProductExist.cartId,
            productId: isProductExist.productId,
            amounts: isProductExist.amounts + amounts,
            totalPrice: isProductExist.totalPrice + totalPrice,
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
        products: updateProducts(cart.products, productId, (product) => ({
          ...product,
          amounts: product.amounts + amounts,
          totalPrice: product.totalPrice + totalPrice,
        })),
      };
    }

    newCart.totalAmounts += amounts;
    newCart.totalPrice += totalPrice;
    setCart(newCart);
  };

  const removeProduct = async (payload) => {
    const { id, amounts, totalPrice } = payload;

    // If user is logged in, post data to server
    if (auth.isLoggedIn) {
      const isProductExist = cart.products.find(
        (product) => product.productId === id,
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
      products: cart.products.filter((product) => product.productId !== id),
      totalAmounts: cart.totalAmounts - amounts,
      totalPrice: cart.totalPrice - totalPrice,
    });
  };

  const removeAllProducts = async () => {
    // If user is logged in, post data to server
    if (auth.isLoggedIn && cart.id !== -1) {
      try {
        const cartItemRequests = cart.products.map((product) => {
          return axios.delete(`${API_BASE_URL}/${product.id}`);
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
        (product) => product.productId === id,
      );

      try {
        const response = await axios.patch(
          `${API_BASE_URL}/${isProductExist.id}`,
          {
            cartId: isProductExist.cartId,
            productId: isProductExist.productId,
            amounts: isProductExist.amounts + 1,
            totalPrice: isProductExist.totalPrice + price,
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
      products: updateProducts(cart.products, id, (product) => ({
        ...product,
        amounts: product.amounts + 1,
        totalPrice: product.totalPrice + product.product.price,
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
        (product) => product.productId === id,
      );

      try {
        const response = await axios.patch(
          `${API_BASE_URL}/${isProductExist.id}`,
          {
            cartId: isProductExist.cartId,
            productId: isProductExist.productId,
            amounts: isProductExist.amounts - 1,
            totalPrice: isProductExist.totalPrice - price,
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
      products: updateProducts(cart.products, id, (product) => ({
        ...product,
        amounts: product.amounts - 1,
        totalPrice: product.totalPrice - product.product.price,
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

    let productList = updateProducts(cart.products, id, (product) => ({
      ...product,
      amounts: vAsNum,
      totalPrice: vAsNum * product.product.price,
    }));

    // If user is logged in, post data to server
    if (auth.isLoggedIn) {
      const isProductExist = cart.products.find(
        (product) => product.productId === id,
      );

      try {
        const response = await axios.patch(
          `${API_BASE_URL}/${isProductExist.id}`,
          {
            cartId: isProductExist.cartId,
            productId: isProductExist.productId,
            amounts: vAsNum,
            totalPrice: vAsNum * isProductExist.price,
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
        (total, product) => total + product.amounts,
        0,
      ),
      totalPrice: productList.reduce(
        (total, product) => total + product.totalPrice,
        0,
      ),
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
