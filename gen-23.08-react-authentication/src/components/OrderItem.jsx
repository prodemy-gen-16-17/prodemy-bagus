import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import idrPriceFormat from "../utils/price";

function OrderItem({ item }) {
  const { product, subTotal } = item;
  const { id, name, sku, images, price } = product;

  return (
    <>
      <div className="border-b-2 py-2 last:border-b-0 last:pb-0">
        <div className="flex gap-3">
          <Link to={`/products/${id}`} className="w-16 flex-none">
            <img className="rounded" src={images[0]} alt={name} />
          </Link>

          <div className="flex-1">
            <Link to={`/products/${id}`} className="font-bold">
              {name}
            </Link>
            <div className="text-sm">SKU {sku}</div>
            <div className="flex items-center justify-between font-bold">
              <span>{idrPriceFormat(price)}</span>
              <span>{idrPriceFormat(subTotal)}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

OrderItem.propTypes = {
  item: PropTypes.object,
};

export default OrderItem;
