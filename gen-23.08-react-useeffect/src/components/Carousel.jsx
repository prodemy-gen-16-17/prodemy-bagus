import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function CarouselItem({ image, index, active }) {
  const [opacity, setOpacity] = useState(active === index ? 1 : 0);

  useEffect(() => {
    setOpacity(active === index ? 1 : 0);
  }, [active, index]);

  return (
    <div
      className={`delay-600 relative z-0 float-left -mr-[100%] hidden w-full !transform-none opacity-${Math.round(
        opacity * 100
      )} transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none ${
        active === index ? "!z-[1] !block" : ""
      }`}
    >
      <img
        src={image}
        className="block w-full rounded-2xl"
        style={{ transition: "opacity 600ms ease-in-out" }}
        onLoad={() => setOpacity(active === index ? 1 : 0)}
      />
    </div>
  );
}

CarouselItem.propTypes = {
  image: PropTypes.string,
  index: PropTypes.number,
  active: PropTypes.number,
};

function CarouselIndicator({
  index,
  active,
  handleClick,
  imageIndicator,
  image,
}) {
  const imgIndicator = imageIndicator ? (
    <img src={image} className="rounded" alt={`Slide ${index + 1}`} />
  ) : null;

  return (
    <button
      type="button"
      className={`${
        imageIndicator
          ? "m-2 min-w-[50px] flex-initial cursor-pointer bg-clip-padding"
          : "mx-[3px] box-content h-[5px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-primary bg-clip-padding p-0"
      } -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${
        active === index ? "!opacity-100" : ""
      }`}
      aria-current={active === index}
      aria-label={`Slide ${index + 1}`}
      onClick={() => handleClick(index)}
    >
      {imgIndicator}
    </button>
  );
}

CarouselIndicator.propTypes = {
  handleClick: PropTypes.func,
  index: PropTypes.number,
  active: PropTypes.number,
  imageIndicator: PropTypes.bool,
  image: PropTypes.string,
};

function Carousel({ className, slideList, imageIndicator }) {
  const [active, setActive] = useState(0);

  function handleClick(id) {
    setActive(id);
  }

  // useEffect(() => {
  //   setInterval(() => {
  //     const maxSlide = slideList.length - 1;
  //     const nextSlide = active + 1;

  //     let newCurrentSlide = Math.min(nextSlide, maxSlide);
  //     const isOnLastSlide = maxSlide === active;
  //     newCurrentSlide = isOnLastSlide ? 0 : newCurrentSlide;

  //     setActive(newCurrentSlide);
  //   }, 3000);
  // }, [slideList, active]);

  function handleClickNext() {
    const maxSlide = slideList.length - 1;
    const nextSlide = active + 1;

    let newCurrentSlide = Math.min(nextSlide, maxSlide);
    const isOnLastSlide = maxSlide === active;
    newCurrentSlide = isOnLastSlide ? 0 : newCurrentSlide;

    setActive(newCurrentSlide);
  }

  function handleClickPrev() {
    const maxSlide = slideList.length - 1;
    const nextSlide = active - 1;

    let newCurrentSlide = Math.max(nextSlide, 0);
    const isOnFirstSlide = active === 0;
    newCurrentSlide = isOnFirstSlide ? maxSlide : newCurrentSlide;

    setActive(newCurrentSlide);
  }

  const carouselItemList = slideList.map(function (carouselItem, index) {
    const img = carouselItem.image ? carouselItem.image : carouselItem;

    return (
      <CarouselItem
        key={index}
        image={img}
        index={index}
        active={active}
      ></CarouselItem>
    );
  });

  const carouselIndicatorList = slideList.map(function (carouselItem, index) {
    const img = carouselItem.image ? carouselItem.image : carouselItem;

    return (
      <CarouselIndicator
        key={index}
        index={index}
        active={active}
        handleClick={handleClick}
        imageIndicator={imageIndicator}
        image={img}
      ></CarouselIndicator>
    );
  });

  return (
    <>
      <div id="carousel-example-crossfade" className={`relative ${className}`}>
        {/* <!--Carousel items--> */}
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          {carouselItemList}

          {/* <!--Carousel controls - prev item--> */}
          <button
            className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            onClick={handleClickPrev}
          >
            <span className="inline-block rounded-full bg-primary p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Previous
            </span>
          </button>

          {/* <!--Carousel controls - next item--> */}
          <button
            className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            onClick={handleClickNext}
          >
            <span className="inline-block rounded-full bg-primary p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Next
            </span>
          </button>
        </div>

        {/* <!--Carousel indicators--> */}
        <div
          className="z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-te-carousel-indicators
        >
          {carouselIndicatorList}
        </div>
      </div>
    </>
  );
}

Carousel.propTypes = {
  className: PropTypes.string,
  slideList: PropTypes.array.isRequired,
  imageIndicator: PropTypes.bool,
};

export default Carousel;
