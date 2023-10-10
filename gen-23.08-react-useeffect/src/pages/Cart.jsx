import { Link } from "react-router-dom";
import PropTypes from "prop-types";



import { products } from "../db.json";
import { idrPriceFormat } from "../utils/price";


function ProductCartDetail({ product }) {
  return (
    <>
      <div className="border-b-2 p-3">
        <div className="flex gap-3">
          <Link to={`products/${product.id}`} className="w-16 flex-none">
            <img
              className="rounded"
              src={product.images[0]}
              alt={product.name}
            />
          </Link>

          <div className="">
            <Link to={`products/${product.id}`} className="">{product.name}</Link>
            <div className="text-sm">SKU {product.sku}</div>
            <div className="flex items-center">
              <span>{idrPriceFormat(product.price)}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex">
            <button className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 fill-primary"
                viewBox="0 0 512 512"
              >
                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  --> */}
                <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"></path>
              </svg>
            </button>
            <button className="p-2">
              <svg viewBox="0 0 24 24" className="h-6 fill-primary">
                <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"></path>
              </svg>
            </button>
          </div>

          <div className="join float-right border p-2">
            <button className="join-item flex items-center justify-center px-1 py-2 sm:p-2">
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
            ></input>
            <button className="join-item flex items-center justify-center px-1 py-2 sm:p-2">
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

ProductCartDetail.propTypes = {
  product: PropTypes.object
}

function Cart() {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold">Cart</h2>

        <div className="flex items-center justify-between text-center">
          <div>6 Products</div>
          <div className="flex gap-x-3">
            <button className="btn h-8 min-h-[32px] bg-base-100">
              <svg viewBox="0 0 24 24" className="w-5 fill-primary">
                <path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z"></path>
              </svg>
              Save
            </button>
            <button className="btn h-8 min-h-[32px] bg-base-100">
              <svg viewBox="0 0 24 24" className="w-5 fill-primary">
                <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"></path>
              </svg>
              Delete All
            </button>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}

export default Cart;
