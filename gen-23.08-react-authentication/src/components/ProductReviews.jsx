import PropTypes from "prop-types";

import epochToDate from "../utils/epochToDate";
import maskName from "../utils/maskName";
import IconStar from "./icons/IconStar";

function Review({ review }) {
  const { rating, title, description, user, anon, createdAt } = review;
  const { name } = user;

  let ratingList = [];
  for (let i = 0; i < rating; i++) {
    ratingList.push(<IconStar key={i} className={"mr-1 h-4"}></IconStar>);
  }

  return (
    <>
      <div className="mt-3">
        <div className="m-1 flex">{ratingList}</div>
        <h3 className="m-1 font-bold">{title}</h3>
        <h4 className="m-1 text-gray-700">
          Ditulis {anon ? maskName(name) : name}, {epochToDate(createdAt)}
        </h4>
        <p className="m-1">{description}</p>
      </div>
    </>
  );
}

Review.propTypes = {
  review: PropTypes.object,
};

function ProductReviews({ ratings, totalReviews }) {
  const reviews = [
    {
      id: 1,
      rating: 5,
      title: "OK",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      userId: 1,
      user: {
        name: "Pusaka",
      },
      anon: true,
      createdAt: 1697868397,
    },
    {
      id: 2,
      rating: 4,
      title: "OK",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      userId: 1,
      user: {
        name: "Postur",
      },
      anon: false,
      createdAt: 1697868397,
    },
  ];

  const reviewList = reviews?.map(function (review) {
    return <Review key={review.id} review={review}></Review>;
  });

  return (
    <>
      <h2 className="mb-3 text-xl font-bold sm:text-2xl">Ulasan</h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[40%_60%]">
        <div className="flex items-center">
          <IconStar className={"mr-1 h-6 lg:h-8"}></IconStar>
          <div className="lg:text-xl">
            <span className="font-bold">{ratings} / 5</span> (
            {`${totalReviews} Ulasan`})
          </div>
        </div>
        <div className="flex justify-between">
          <button className="btn h-full flex-col border-0 bg-base-100 p-1 lg:p-2">
            <div className="flex items-center justify-center text-center">
              <IconStar className={"mr-1 h-4 sm:h-6"}></IconStar>
              <span className="font-bold">5</span>
              <span className="ml-1 hidden font-bold min-[387px]:block min-[472px]:hidden">
                (10)
              </span>
            </div>
            <div className="hidden text-center min-[472px]:block">
              10 Ulasan
            </div>
          </button>
          <button className="btn h-full flex-col border-0 bg-base-100 p-1 lg:p-2">
            <div className="flex items-center justify-center text-center">
              <IconStar className={"mr-1 h-4 sm:h-6"}></IconStar>
              <span className="font-bold">4</span>
              <span className="ml-1 hidden font-bold min-[387px]:block min-[472px]:hidden">
                (10)
              </span>
            </div>
            <div className="hidden text-center min-[472px]:block">
              10 Ulasan
            </div>
          </button>
          <button className="btn h-full flex-col border-0 bg-base-100 p-1 lg:p-2">
            <div className="flex items-center justify-center text-center">
              <IconStar className={"mr-1 h-4 sm:h-6"}></IconStar>
              <span className="font-bold">3</span>
              <span className="ml-1 hidden font-bold min-[387px]:block min-[472px]:hidden">
                (10)
              </span>
            </div>
            <div className="hidden text-center min-[472px]:block">
              10 Ulasan
            </div>
          </button>
          <button className="btn h-full flex-col border-0 bg-base-100 p-1 lg:p-2">
            <div className="flex items-center justify-center text-center">
              <IconStar className={"mr-1 h-4 sm:h-6"}></IconStar>
              <span className="font-bold">2</span>
              <span className="ml-1 hidden font-bold min-[387px]:block min-[472px]:hidden">
                (10)
              </span>
            </div>
            <div className="hidden text-center min-[472px]:block">
              10 Ulasan
            </div>
          </button>
          <button className="btn h-full flex-col border-0 bg-base-100 p-1 lg:p-2">
            <div className="flex items-center justify-center text-center">
              <IconStar className={"mr-1 h-4 sm:h-6"}></IconStar>
              <span className="font-bold">1</span>
              <span className="ml-1 hidden font-bold min-[387px]:block min-[472px]:hidden">
                (10)
              </span>
            </div>
            <div className="hidden text-center min-[472px]:block">
              10 Ulasan
            </div>
          </button>
        </div>
      </div>

      {/* <!-- Ulasan  --> */}
      <div className="mt-3">{reviewList}</div>
    </>
  );
}

ProductReviews.propTypes = {
  ratings: PropTypes.number,
  totalReviews: PropTypes.number,
};

export default ProductReviews;
