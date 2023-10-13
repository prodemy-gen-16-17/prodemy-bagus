import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

import { categories, products } from "../db.json";
import { idrPriceFormat } from "../utils/price";
// TODO: Create checkout multi step navigation
function ProductCart({
  product,
  handleMinus,
  handleInputChanged,
  handlePlus,
  handleDelete,
}) {
  const { id, name, sku, images, totalPrice, amounts } = product;

  function handleMinusTotalProduct() {
    return handleMinus(id);
  }

  function handleTotalProductChanged(event) {
    return handleInputChanged(id, event);
  }

  function handlePlusTotalProduct() {
    return handlePlus(id);
  }

  function handleDeleteProductById() {
    return handleDelete(id);
  }

  return (
    <>
      <div className="border-b-2 p-3">
        <div className="flex gap-3">
          <Link to={`/products/${id}`} className="w-16 flex-none">
            <img className="rounded" src={images[0]} alt={name} />
          </Link>

          <div className="">
            <Link to={`products/${id}`} className="font-bold">
              {name}
            </Link>
            <div className="text-sm">SKU {sku}</div>
            <div className="flex items-center font-bold">
              <span>{idrPriceFormat(totalPrice)}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex">
            <button className="btn border-0 bg-base-100 px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 fill-primary"
                viewBox="0 0 512 512"
              >
                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  --> */}
                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"></path>
              </svg>
            </button>
            <button
              className="btn border-0 bg-base-100 px-3"
              onClick={handleDeleteProductById}
            >
              <svg viewBox="0 0 24 24" className="h-6 fill-primary">
                <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"></path>
              </svg>
            </button>
          </div>

          <div className="join float-right border border-primary p-2">
            <button
              className="join-item flex items-center justify-center px-1 py-2 sm:p-2"
              onClick={handleMinusTotalProduct}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 fill-primary"
                viewBox="0 0 448 512"
              >
                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  --> */}
                <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"></path>
              </svg>
            </button>
            <input
              className="join-item w-8 border-0 bg-base-100 p-0 text-center"
              type="tel"
              maxLength="4"
              pattern="^-?[0-9]\d*\.?\d*$"
              name="amounts"
              value={amounts}
              onChange={handleTotalProductChanged}
            ></input>
            <button
              className="join-item flex items-center justify-center px-1 py-2 sm:p-2"
              onClick={handlePlusTotalProduct}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 fill-primary"
                viewBox="0 0 448 512"
              >
                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  --> */}
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

ProductCart.propTypes = {
  product: PropTypes.object,
  handleMinus: PropTypes.func,
  handleInputChanged: PropTypes.func,
  handlePlus: PropTypes.func,
  handleDelete: PropTypes.func,
};

function Cart() {
  // from json or api that marked to cart
  const someProducts = [...products]
    .sort(function (a, b) {
      return a.price - b.price;
    })
    .slice(0, 7);

  const processedProducts = someProducts.map(function (product) {
    const { minimumOrder } = categories.find(function (category) {
      return category.id === product.categoryId;
    });

    const totalPrice = minimumOrder * product.price;

    return {
      ...product,
      minimumOrder: minimumOrder,
      amounts: minimumOrder,
      totalPrice: totalPrice,
    };
  });

  const [productsCart, setProductsCart] = useState(processedProducts);

  function handleCartDeleteAllClick() {
    setProductsCart([]);
  }

  function handlePlusTotalProduct(id) {
    setProductsCart(function (productsCart) {
      return productsCart.map(function (product) {
        const newAmount = product.amounts + 1;
        const newTotalPrice = newAmount * product.price;

        return product.id === id
          ? { ...product, amounts: newAmount, totalPrice: newTotalPrice }
          : product;
      });
    });
  }

  function handleMinusTotalProduct(id) {
    setProductsCart(function (productsCart) {
      return productsCart.map(function (product) {
        const newAmount =
          product.amounts <= product.minimumOrder
            ? product.amounts
            : product.amounts - 1;

        const newTotalPrice = newAmount * product.price;

        return product.id === id
          ? {
              ...product,
              amounts: newAmount,
              totalPrice: newTotalPrice,
            }
          : product;
      });
    });
  }

  function handleTotalProductChanged(id, event) {
    setProductsCart(function (productsCart) {
      return productsCart.map(function (product) {
        const value = parseInt(event.target.value, 10);

        const newAmount =
          value <= product.minimumOrder ? product.minimumOrder : value;
        const newTotalPrice = newAmount * product.price;

        return product.id === id
          ? {
              ...product,
              amounts: newAmount,
              totalPrice: newTotalPrice,
            }
          : product;
      });
    });
  }

  function handleDeleteProductById(id) {
    setProductsCart(function (productsCart) {
      return productsCart.filter(function (product) {
        return product.id !== id;
      });
    });
  }

  function handleOrder() {
    console.log(productsCart);
  }

  const totalAmountProductsCart = productsCart.reduce(function (
    accumulator,
    curValue,
  ) {
    return accumulator + curValue.amounts;
  }, 0);

  const totalPriceProductsCart = productsCart.reduce(function (
    accumulator,
    curValue,
  ) {
    return accumulator + curValue.totalPrice;
  }, 0);

  const totalProductsCart =
    totalAmountProductsCart === 1
      ? `${totalAmountProductsCart} product`
      : `${totalAmountProductsCart} products`;

  const productList = productsCart.map(function (product) {
    return (
      <ProductCart
        key={product.id}
        product={product}
        handleMinus={handleMinusTotalProduct}
        handleInputChanged={handleTotalProductChanged}
        handlePlus={handlePlusTotalProduct}
        handleDelete={handleDeleteProductById}
      ></ProductCart>
    );
  });

  return (
    <>
      <div className="flex flex-wrap pt-6">
        <div className="mb-6 w-full rounded-2xl shadow-xl lg:mr-6 lg:min-w-[67%] lg:max-w-[67%] lg:grow lg:basis-0">
          <div className="">
            <h2 className="px-3 pt-3 text-2xl font-bold">Shopping Cart</h2>

            <div className="flex items-center justify-between px-3 pb-3 text-center">
              <div>{totalProductsCart}</div>
              <div className="flex gap-x-3">
                <button className="btn h-8 min-h-[32px] border-0 bg-base-100">
                  <svg viewBox="0 0 24 24" className="w-5 fill-primary">
                    <path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z"></path>
                  </svg>
                  Save
                </button>
                <button
                  className="btn h-8 min-h-[32px] border-0 bg-base-100"
                  onClick={handleCartDeleteAllClick}
                >
                  <svg viewBox="0 0 24 24" className="w-5 fill-primary">
                    <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"></path>
                  </svg>
                  Delete All
                </button>
              </div>
            </div>

            <div>{productList}</div>
          </div>
        </div>

        <div className="w-full lg:grow lg:basis-0">
          <div className="sticky top-24 rounded-2xl border-2 p-6 shadow-xl">
            <div className="text-xl font-bold">Details</div>
            <div className="py-4">
              <div className="flex justify-between pb-4">
                <div>
                  <span>Total Price</span>{" "}
                  <span className="lg:block min-[1130px]:inline">
                    ({totalProductsCart})
                  </span>
                </div>
                <div>{idrPriceFormat(totalPriceProductsCart)}</div>
              </div>
              <div className="flex justify-between pb-4">
                <div className="font-bold">Total</div>
                <div className="font-bold">
                  {idrPriceFormat(totalPriceProductsCart)}
                </div>
              </div>
              <button
                className="btn btn-primary btn-block"
                onClick={handleOrder}
              >
                order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
