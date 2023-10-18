// import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { Link } from "react-router-dom";

import CartProduct from "../components/CartProduct";
import { CartContext } from "../context/CartProvider";
// import { removeAllProducts } from "../redux/cartSlice";
import { idrPriceFormat } from "../utils/price";

function CartEmpty() {
  return (
    <>
      <div className="flex items-center justify-center py-6 text-center">
        <div className="">
          <h2 className="mb-4 text-2xl font-bold">
            Your Shopping Cart is Empty
          </h2>
          <div className="mb-6">
            Start Shopping Now and Find the Products You Want
          </div>
          <Link className="btn btn-primary">Start Shopping</Link>
        </div>
      </div>
    </>
  );
}

function Cart() {
  // const products = useSelector((state) => state.cart.products);
  // const totalAmounts = useSelector((state) => state.cart.totalAmounts);
  // const totalPrice = useSelector((state) => state.cart.totalPrice);

  // const dispatch = useDispatch();
  // function handleRemoveAllProducts() {
  //   dispatch(removeAllProducts());
  // }
  const { cart, removeAllProducts } = useContext(CartContext);
  const products = cart.products;
  const totalAmounts = cart.totalAmounts;
  const totalPrice = cart.totalPrice;

  function handleRemoveAllProducts() {
    removeAllProducts();
  }

  function handleOrder() {
    console.log(products);
  }

  const totalProductsCart =
    totalAmounts === 1 ? `${totalAmounts} product` : `${totalAmounts} products`;

  const productList = products?.map(function (product) {
    return <CartProduct key={product.id} product={product}></CartProduct>;
  });

  if (totalAmounts === 0) {
    return <CartEmpty></CartEmpty>;
  }

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
                  onClick={handleRemoveAllProducts}
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
                <div>{idrPriceFormat(totalPrice)}</div>
              </div>
              <div className="flex justify-between pb-4">
                <div className="font-bold">Total</div>
                <div className="font-bold">{idrPriceFormat(totalPrice)}</div>
              </div>
              <button
                type="button"
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
