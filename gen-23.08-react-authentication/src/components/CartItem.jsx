import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  onChangeAsync as onChangeItem,
  onDecrementAsync as onDecrementItem,
  onIncrementAsync as onIncrementItem,
  removeItemAsync as removeCartItem,
} from "../redux/reducers/cartSlice";
import absoluteRange from "../utils/absoluteRange";
import idrPriceFormat from "../utils/price";
import useDebounce from "../utils/useDebounce";

function CartItem({ item }) {
  const { amounts, maxOrder, product, subTotal } = item;
  const { id, name, sku, images, price, minOrder } = product;

  const [itemAmounts, setItemAmounts] = useState(amounts);

  const dispatch = useDispatch();

  // https://www.developerway.com/posts/debouncing-in-react#part3
  const onChange = () => {
    console.log("State itemAmounts:", itemAmounts);
    const valueAsNumber = absoluteRange(itemAmounts, minOrder, maxOrder);
    console.log("State itemAmounts:", valueAsNumber);
    dispatch(
      onChangeItem({
        id,
        price,
        amounts: valueAsNumber,
        minOrder,
        maxOrder,
      }),
    );
  };

  const debouncedOnChange = useDebounce(onChange);

  function handleOnChange(event) {
    debouncedOnChange();
    setItemAmounts(event.target.value);
  }

  function handleOnDecrement() {
    dispatch(onDecrementItem({ id, price }));
  }

  function handleOnIncrement() {
    dispatch(onIncrementItem({ id, price }));
  }

  function handleRemoveItemById() {
    dispatch(removeCartItem({ id, amounts, subTotal }));
  }

  return (
    <>
      <div className="border-b-2 last:border-b-0">
        <div className="flex gap-3">
          <Link to={`/products/${id}`} className="w-[68px] flex-none">
            <img className="rounded" src={images[0]} alt={name} />
          </Link>

          <div className="flex-1">
            <Link to={`/products/${id}`} className="font-bold">
              {name}
            </Link>
            <div className="text-sm">SKU {sku}</div>
            <div className="flex flex-wrap items-center justify-between gap-x-3 font-bold">
              <span>{idrPriceFormat(price)}</span>
              <span>{idrPriceFormat(subTotal)}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex">
            <button type="button" className="btn border-0 bg-base-100 px-3">
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
              type="button"
              className="btn border-0 bg-base-100 px-3"
              onClick={handleRemoveItemById}
            >
              <svg viewBox="0 0 24 24" className="h-6 fill-primary">
                <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"></path>
              </svg>
            </button>
          </div>

          <div className="join float-right border border-primary p-2">
            <button
              type="button"
              className="join-item flex items-center justify-center px-1 py-2 sm:p-2"
              onClick={handleOnDecrement}
              disabled={amounts <= minOrder}
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
              type="number"
              name="amounts"
              value={amounts}
              onChange={handleOnChange}
            ></input>
            <button
              type="button"
              className="join-item flex items-center justify-center px-1 py-2 sm:p-2"
              onClick={handleOnIncrement}
              disabled={amounts >= maxOrder}
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

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
