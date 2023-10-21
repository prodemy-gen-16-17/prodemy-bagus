import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import idrPriceFormat from "../utils/price";
import IconStar from "./icons/IconStar";

function ProductCard({ className, product }) {
  return (
    <>
      <Link to={`/products/${product.id}`}>
        <div className={`card card-compact bg-base-100 shadow-xl ${className}`}>
          <figure>
            <img
              src={product.images[0]}
              alt={product.name}
              className="hover:scale-110"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h3 className="card-title line-clamp-2 text-lg">{product.name}</h3>
            <p>
              <IconStar className={"mr-1 inline h-4"}></IconStar>
              {product.ratings} ({product.totalReviews})
            </p>
            <p className="text-base font-bold text-primary">
              {idrPriceFormat(product.price)}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired,
};

export default ProductCard;
