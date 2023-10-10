import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { idrPriceFormat } from "../utils/price";

function ProductCard({ className, product }) {
  return (
    <>
      <Link to={`/products/${product.id}`}>
        <div className={`card card-compact bg-base-100 shadow-xl ${className}`}>
          <figure>
            <img src={product.images[0]} alt={product.name} className="hover:scale-110"/>
          </figure>
          <div className="card-body items-center text-center">
            <h3 className="card-title line-clamp-2 text-lg">{product.name}</h3>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 inline h-4 fill-yellow-500"
                viewBox="0 0 576 512"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
              </svg>
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
