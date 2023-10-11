import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <>
      <Link>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              src={category.image}
              alt={category.name}
              className="w-[160px] hover:scale-110"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h3 className="card-title line-clamp-2 text-lg">{category.name}</h3>
          </div>
        </div>
      </Link>
    </>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.object.isRequired,
};

export default CategoryCard;
