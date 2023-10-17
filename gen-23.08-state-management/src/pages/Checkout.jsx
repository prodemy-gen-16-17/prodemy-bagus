import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

import { categories, products } from "../../data/db.json";
import { idrPriceFormat } from "../utils/price";
// TODO: Create checkout multi step navigation
function ProductCart({ product }) {
  const { id, name, sku, images, totalPrice } = product;

  return (
    <>
      <div className="border-b-2 p-3 last:border-b-0">
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
      </div>
    </>
  );
}

ProductCart.propTypes = {
  product: PropTypes.object,
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
    return <ProductCart key={product.id} product={product}></ProductCart>;
  });

  return (
    <>
      <div className="flex flex-wrap pt-6">
        <div className="mb-6 w-full rounded-2xl shadow-xl lg:mr-6 lg:min-w-[67%] lg:max-w-[67%] lg:grow lg:basis-0">
          <div className="">
            <h2 className="px-3 pt-3 text-2xl font-bold">Shopping Cart</h2>

            <div className="flex items-center justify-between px-3 pb-3 text-center">
              <div>{totalProductsCart}</div>
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
