import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

// import { createItem } from "../api/api";
// import { ORDER_ITEMS, ORDERS } from "../api/routes";
import CartItem from "../components/CartItem";
import { removeAllItems } from "../redux/reducers/cartSlice";
import { addOrder } from "../redux/reducers/orderSlice";
import idrPriceFormat from "../utils/price";

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
  const { isLoading, items, totalAmounts, totalPrice } = useSelector(
    (state) => state.cart,
  );

  const dispatch = useDispatch();
  function handleRemoveAllItems() {
    dispatch(removeAllItems());
  }

  const navigate = useNavigate();
  function handleOrder() {
    dispatch(addOrder({ items, totalAmounts, totalPrice }));
    handleRemoveAllItems();
    navigate("/checkout");
  }

  const totalCartItems =
    totalAmounts === 1 ? `1 product` : `${totalAmounts} products`;

  const itemList = items?.map(function (item, index) {
    return <CartItem key={index} item={item}></CartItem>;
  });

  if (isLoading) {
    return (
      <>
        <div className="flex h-screen items-center justify-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      </>
    );
  }

  if (totalAmounts === 0) {
    return <CartEmpty></CartEmpty>;
  }

  return (
    <>
      <div className="flex flex-wrap pt-6">
        <div className="card mb-6 w-full shadow-xl lg:mr-6 lg:min-w-[67%] lg:max-w-[67%] lg:grow lg:basis-0">
          <div className="card-body p-6">
            <h2 className="text-2xl font-bold">Shopping Cart</h2>

            <div className="flex items-center justify-between text-center">
              <div>{totalCartItems}</div>
              <div className="flex gap-x-3">
                <button className="btn h-8 min-h-[32px] border-0 bg-base-100">
                  <svg viewBox="0 0 24 24" className="w-5 fill-primary">
                    <path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z"></path>
                  </svg>
                  Save
                </button>
                <button
                  className="btn h-8 min-h-[32px] border-0 bg-base-100"
                  onClick={handleRemoveAllItems}
                >
                  <svg viewBox="0 0 24 24" className="w-5 fill-primary">
                    <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"></path>
                  </svg>
                  Delete All
                </button>
              </div>
            </div>

            <div>{itemList}</div>
          </div>
        </div>

        <div className="w-full lg:grow lg:basis-0">
          <div className="card sticky top-0 mb-6 shadow-xl">
            <div className="card-body p-6">
              <div className="text-xl font-bold">Details</div>
              <div className="py-4">
                <div className="flex justify-between pb-4">
                  <div>
                    <span>Total Price</span>{" "}
                    <span className="lg:block min-[1130px]:inline">
                      ({totalCartItems})
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
      </div>
    </>
  );
}

export default Cart;
