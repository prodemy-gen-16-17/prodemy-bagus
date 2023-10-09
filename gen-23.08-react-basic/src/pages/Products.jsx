import { useEffect } from "react";
import { Carousel, initTE } from "tw-elements";

function Products() {
  useEffect(() => {
    initTE({ Carousel });
  }, []);
  return (
    <>
      {/* <!-- breadcrumb  --> */}
      <nav className="hidden w-full py-3 md:block lg:px-6">
        <ol className="list-reset flex">
          <li>
            <a
              href="#"
              className="hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 text-primary transition duration-150 ease-in-out"
            >
              Category 1
            </a>
          </li>
          <li>
            <span className="mx-2 text-neutral-500">&gt;</span>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 text-primary transition duration-150 ease-in-out"
            >
              Sub Category 1
            </a>
          </li>
          <li>
            <span className="mx-2 text-neutral-500">&gt;</span>
          </li>
          <li className="text-neutral-500">
            DiFluid - R1 Coffee Refractometer
          </li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* <!-- top-mobile right-desktop  --> */}
        <div className="">
          {/* <!-- carousel mobile  --> */}
          <div
            id="carousel-mobile-indicator"
            className="relative lg:hidden"
            data-te-carousel-init=""
            data-te-ride="carousel"
          >
            {/* <!--Carousel indicators --> */}
            <div
              className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
              data-te-carousel-indicators=""
            >
              <button
                type="button"
                data-te-target="#carousel-mobile-indicator"
                data-te-slide-to="0"
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-green-500 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-te-target="#carousel-mobile-indicator"
                data-te-slide-to="1"
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-green-500 bg-clip-padding p-0 -indent-[999px] !opacity-100 opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 2"
                data-te-carousel-active=""
                aria-current="true"
              ></button>
              <button
                type="button"
                data-te-target="#carousel-mobile-indicator"
                data-te-slide-to="2"
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-green-500 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 3"
              ></button>
            </div>

            {/* <!--Carousel items --> */}
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              {/* <!--First item --> */}
              <div
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item=""
              >
                <img
                  src="https://s-ecom.ottenstatic.com/original/64f5950499e0b133674202.jpg"
                  className="block w-full rounded-xl"
                  alt="Wild Landscape"
                ></img>
              </div>
              {/* <!--Second item --> */}
              <div
                className="relative float-left -mr-[100%] !block hidden w-full transition-transform duration-[600ms] ease-in-out data-[te-carousel-fade]:z-[1] data-[te-carousel-fade]:opacity-100 motion-reduce:transition-none"
                data-te-carousel-item=""
                data-te-carousel-active=""
              >
                <img
                  src="https://s-ecom.ottenstatic.com/original/64f5950495c6c776218984.jpg"
                  className="block w-full rounded-xl"
                  alt="Camera"
                ></img>
              </div>
              {/* <!--Third item --> */}
              <div
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item=""
              >
                <img
                  src="https://s-ecom.ottenstatic.com/original/64f595049bb65142483082.jpg"
                  className="block w-full rounded-xl"
                  alt="Exotic Fruits"
                ></img>
              </div>
            </div>

            {/* <!--Carousel controls - prev item --> */}
            <button
              className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-green-500 opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-green-600 hover:no-underline hover:opacity-90 hover:outline-none focus:text-green-600 focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-te-target="#carousel-mobile-indicator"
              data-te-slide="prev"
            >
              <span className="inline-block h-8 w-8">
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
                  ></path>
                </svg>
              </span>
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Previous
              </span>
            </button>
            {/* <!--Carousel controls - next item --> */}
            <button
              className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-green-500 opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-green-600 hover:no-underline hover:opacity-90 hover:outline-none focus:text-green-600 focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-te-target="#carousel-mobile-indicator"
              data-te-slide="next"
            >
              <span className="inline-block h-8 w-8">
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
                  ></path>
                </svg>
              </span>
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Next
              </span>
            </button>
          </div>

          {/* <!-- carousel desktop  --> */}
          <div className="hidden lg:block lg:pl-6">
            <div
              id="carousel-desktop-indicator"
              className="relative"
              data-te-carousel-init=""
              data-te-ride="carousel"
            >
              {/* <!--Carousel items --> */}
              <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                {/* <!--First item --> */}
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item=""
                >
                  <img
                    src="https://s-ecom.ottenstatic.com/original/64f5950499e0b133674202.jpg"
                    className="block w-full rounded-lg"
                    alt="Wild Landscape"
                  ></img>
                </div>
                {/* <!--Second item --> */}
                <div
                  className="relative float-left -mr-[100%] !block hidden w-full transition-transform duration-[600ms] ease-in-out data-[te-carousel-fade]:z-[1] data-[te-carousel-fade]:opacity-100 motion-reduce:transition-none"
                  data-te-carousel-item=""
                  data-te-carousel-active=""
                >
                  <img
                    src="https://s-ecom.ottenstatic.com/original/64f5950495c6c776218984.jpg"
                    className="block w-full rounded-lg"
                    alt="Camera"
                  ></img>
                </div>
                {/* <!--Third item --> */}
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item=""
                >
                  <img
                    src="https://s-ecom.ottenstatic.com/original/64f595049bb65142483082.jpg"
                    className="block w-full rounded-lg"
                    alt="Exotic Fruits"
                  ></img>
                </div>

                {/* <!--Carousel controls - prev item --> */}
                <button
                  className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-green-500 opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-green-600 hover:no-underline hover:opacity-90 hover:outline-none focus:text-green-600 focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                  type="button"
                  data-te-target="#carousel-desktop-indicator"
                  data-te-slide="prev"
                >
                  <span className="inline-block h-8 w-8">
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
                      ></path>
                    </svg>
                  </span>
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Previous
                  </span>
                </button>
                {/* <!--Carousel controls - next item --> */}
                <button
                  className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-green-500 opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-green-600 hover:no-underline hover:opacity-90 hover:outline-none focus:text-green-600 focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                  type="button"
                  data-te-target="#carousel-desktop-indicator"
                  data-te-slide="next"
                >
                  <span className="inline-block h-8 w-8">
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
                      ></path>
                    </svg>
                  </span>
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Next
                  </span>
                </button>
              </div>

              {/* <!--Carousel indicators --> */}
              <div
                className="flex list-none justify-center p-0"
                data-te-carousel-indicators=""
              >
                <button
                  type="button"
                  data-te-target="#carousel-desktop-indicator"
                  data-te-slide-to="0"
                  className="m-2 w-20 flex-initial cursor-pointer bg-clip-padding -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                  aria-label="Slide 1"
                >
                  <img
                    src="https://s-ecom.ottenstatic.com/original/64f5950499e0b133674202.jpg"
                    className="rounded"
                    alt="Wild Landscape"
                  ></img>
                </button>
                <button
                  type="button"
                  data-te-target="#carousel-desktop-indicator"
                  data-te-slide-to="1"
                  className="m-2 w-20 flex-initial cursor-pointer bg-clip-padding -indent-[999px] !opacity-100 opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                  aria-label="Slide 2"
                  data-te-carousel-active=""
                  aria-current="true"
                >
                  <img
                    src="https://s-ecom.ottenstatic.com/original/64f5950495c6c776218984.jpg"
                    className="rounded"
                    alt="Camera"
                  ></img>
                </button>
                <button
                  type="button"
                  data-te-target="#carousel-desktop-indicator"
                  data-te-slide-to="2"
                  className="m-2 w-20 flex-initial cursor-pointer bg-clip-padding -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                  aria-label="Slide 3"
                >
                  <img
                    src="https://s-ecom.ottenstatic.com/original/64f595049bb65142483082.jpg"
                    className="rounded"
                    alt="Exotic Fruits"
                  ></img>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- bottom-mobile left-desktop  --> */}
        <div className="mt-4 lg:mt-0 lg:pr-6">
          <h1 className="text-2xl font-bold sm:text-3xl">
            DiFluid - R1 Coffee Refractometer
          </h1>

          <div className="mt-2 flex flex-wrap items-center">
            <div className="m-1 inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-6 fill-yellow-500"
                viewBox="0 0 576 512"
              >
                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  --> */}
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
              </svg>
              4.8 (10 Ulasan)
            </div>
            <span className="m-1">•</span>
            <div className="m-1 inline">Brand DiFluid</div>
            <span className="m-1">•</span>
            <div className="m-1 inline">SKU ASDFGHJKLZXCV</div>
            <span className="m-1">•</span>
            <div className="m-1 inline">Tersedia COD</div>
            <span className="m-1">•</span>
            <div className="m-1 inline">Gratis Ongkir</div>
          </div>

          <div className="mt-2 flex items-center">
            <div className="w-1/2">
              <div className="text-xl font-bold text-green-700 sm:text-2xl">
                Rp 2.250.000
              </div>
            </div>
            <div className="w-1/2">
              <button className="float-right p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 fill-green-500"
                  viewBox="0 0 512 512"
                >
                  {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  --> */}
                  <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"></path>
                </svg>
              </button>
              <button className="float-right p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 fill-green-500"
                  viewBox="0 0 512 512"
                >
                  {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  --> */}
                  <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"></path>
                </svg>
              </button>
            </div>
          </div>

          <hr className="my-2 border"></hr>

          <div className="">
            <div className="">Stok</div>
            <div className="my-2 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
              <div className="rounded border-2 p-3">
                <h4 className="font-bold first-letter:uppercase">jakarta</h4>
                <p className="first-letter:uppercase">sisa 10</p>
              </div>

              <div className="rounded border-2 p-3">
                <h4 className="font-bold first-letter:uppercase">bandung</h4>
                <p className="first-letter:uppercase">habis</p>
              </div>

              <div className="rounded border-2 p-3">
                <h4 className="font-bold first-letter:uppercase">bogor</h4>
                <p className="first-letter:uppercase">habis</p>
              </div>
            </div>
          </div>

          <hr className="my-2 border"></hr>

          <div className="flex items-center justify-between">
            <span className="text-center">Jumlah</span>
            <div className="float-right flex rounded-md border p-2">
              <button className="flex items-center justify-center px-1 py-2 sm:p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 fill-green-500"
                  viewBox="0 0 448 512"
                >
                  {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  --> */}
                  <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"></path>
                </svg>
              </button>
              <input
                className="w-8 border-0 p-0 text-center"
                type="tel"
                maxLength="4"
                pattern="^-?[0-9]\d*\.?\d*$"
                defaultValue={1}
              ></input>
              <button className="flex items-center justify-center px-1 py-2 sm:p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 fill-green-500"
                  viewBox="0 0 448 512"
                >
                  {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  --> */}
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                </svg>
              </button>
            </div>
          </div>

          <hr className="my-2 border"></hr>

          <div className="flex h-16 items-center justify-evenly">
            <button className="mx-1 flex flex-1 items-center justify-center rounded border border-green-500 fill-green-500 p-2 text-green-500 hover:bg-green-500 hover:fill-white hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4"
                viewBox="0 0 448 512"
              >
                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  --> */}
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
              </svg>
              <span className="ml-1">Buy Now</span>
            </button>

            <button className="mx-1 flex flex-1 items-center justify-center rounded border bg-green-500 p-2 text-white hover:bg-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 fill-white"
                viewBox="0 0 576 512"
              >
                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  --> */}
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
              </svg>
              <span className="ml-1">Cart</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 lg:mt-8 lg:px-6">
        <h2 className="mb-3 text-xl font-bold sm:text-2xl">Informasi Produk</h2>
        <div className="mb-3">
          <h3 className="mb-1 text-lg font-bold sm:text-xl">Spesifikasi</h3>
          <ul className="list-inside list-disc">
            <li>Exact - Precision ±0.03%, resolution 0.01%</li>
            <li>
              Smart - In-app guidance for Golden Cup extraction and data export
            </li>
            <li>Tiny - only 24 grams</li>
          </ul>
        </div>
        <div className="mb-3">
          <h3 className="mb-1 text-lg font-bold sm:text-xl">Deskripsi</h3>
          <p className="text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      <div className="mt-4 lg:mt-8 lg:px-6">
        <h2 className="mb-3 text-xl font-bold sm:text-2xl">Ulasan</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 h-6 fill-yellow-500 lg:h-8"
              viewBox="0 0 576 512"
            >
              {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  --> */}
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
            </svg>
            <div className="lg:text-xl">
              <span className="font-bold">4.8 / 5</span> (10 Ulasan)
            </div>
          </div>
          <div className="flex lg:justify-between">
            <button className="rounded border border-white hover:border-green-500 focus:border-green-500">
              <div className="m-1 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 h-6 fill-yellow-500"
                  viewBox="0 0 576 512"
                >
                  {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  --> */}
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                </svg>
                <div className="">
                  <span className="font-bold">5</span>
                </div>
              </div>
              <p className="m-1 text-center text-sm sm:text-base">10 Ulasan</p>
            </button>
            <button className="rounded border border-white hover:border-green-500 focus:border-green-500">
              <div className="m-1 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 h-6 fill-yellow-500"
                  viewBox="0 0 576 512"
                >
                  {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  --> */}
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                </svg>
                <div className="">
                  <span className="font-bold">4</span>
                </div>
              </div>
              <p className="m-1 text-center text-sm sm:text-base">0 Ulasan</p>
            </button>
            <button className="rounded border border-white hover:border-green-500 focus:border-green-500">
              <div className="m-1 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 h-6 fill-yellow-500"
                  viewBox="0 0 576 512"
                >
                  {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  --> */}
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                </svg>
                <div className="">
                  <span className="font-bold">3</span>
                </div>
              </div>
              <p className="m-1 text-center text-sm sm:text-base">0 Ulasan</p>
            </button>
            <button className="rounded border border-white hover:border-green-500 focus:border-green-500">
              <div className="m-1 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 h-6 fill-yellow-500"
                  viewBox="0 0 576 512"
                >
                  {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  --> */}
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                </svg>
                <div className="">
                  <span className="font-bold">2</span>
                </div>
              </div>
              <p className="m-1 text-center text-sm sm:text-base">0 Ulasan</p>
            </button>
            <button className="rounded border border-white hover:border-green-500 focus:border-green-500">
              <div className="m-1 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 h-6 fill-yellow-500"
                  viewBox="0 0 576 512"
                >
                  {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  --> */}
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                </svg>
                <div className="">
                  <span className="font-bold">1</span>
                </div>
              </div>
              <p className="m-1 text-center text-sm sm:text-base">0 Ulasan</p>
            </button>
          </div>
        </div>
        {/* <!-- Ulasan  --> */}
        <div className="mt-3">
          {/* <!-- Ulasan Orang  --> */}
          <div className="mt-3">
            <div className="m-1 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-4 fill-yellow-500"
                viewBox="0 0 576 512"
              >
                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  --> */}
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-4 fill-yellow-500"
                viewBox="0 0 576 512"
              >
                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  --> */}
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-4 fill-yellow-500"
                viewBox="0 0 576 512"
              >
                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  --> */}
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-4 fill-yellow-500"
                viewBox="0 0 576 512"
              >
                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  --> */}
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-4 fill-yellow-500"
                viewBox="0 0 576 512"
              >
                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  --> */}
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
              </svg>
            </div>
            <h3 className="m-1 font-bold">OK</h3>
            <h4 className="m-1 text-gray-700">Ditulis P*******, 25 Sep 2023</h4>
            <p className="m-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          {/* <!-- Ulasan Orang  --> */}
          <div className="mt-3">
            <div className="m-1 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-4 fill-yellow-500"
                viewBox="0 0 576 512"
              >
                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  --> */}
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-4 fill-yellow-500"
                viewBox="0 0 576 512"
              >
                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  --> */}
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-4 fill-yellow-500"
                viewBox="0 0 576 512"
              >
                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  --> */}
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-4 fill-yellow-500"
                viewBox="0 0 576 512"
              >
                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  --> */}
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-4 fill-yellow-500"
                viewBox="0 0 576 512"
              >
                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  --> */}
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
              </svg>
            </div>
            <h3 className="m-1 font-bold">OK</h3>
            <h4 className="m-1 text-gray-700">Ditulis P*******, 25 Sep 2023</h4>
            <p className="m-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>

      {/* <!-- Produk Terkait  --> */}
      <section className="mt-4 text-center lg:mt-8 lg:px-6">
        <div className="flex items-center justify-between py-2">
          <h2 className="text-xl font-bold sm:text-2xl">Produk Terkait</h2>
        </div>
        <div className="flex flex-nowrap overflow-x-auto">
          {/* <!-- Product 1  --> */}
          <a href="product.html" className="">
            <div className="m-1 min-w-[200px] rounded border border-gray-300 bg-gray-100 text-center">
              <img
                src="https://s-ecom.ottenstatic.com/thumbnail/63623e2a55335024133293.png"
                alt="Product 1"
                className="h-auto max-w-full rounded-t"
              ></img>
              <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">
                  Wanoja Kamojang Anaerobic Honey Process 200g Kopi Arabica
                </h3>
                <div className="mt-2 text-base font-bold text-green-700">
                  Rp 185.000
                </div>
              </div>
            </div>
          </a>

          <a href="product.html" className="">
            <div className="m-1 min-w-[200px] rounded border border-gray-300 bg-gray-100 text-center">
              <img
                src="https://s-ecom.ottenstatic.com/thumbnail/63623e2a55335024133293.png"
                alt="Product 1"
                className="h-auto max-w-full rounded-t"
              ></img>
              <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">
                  Wanoja Kamojang Anaerobic Honey Process 200g Kopi Arabica
                </h3>
                <div className="mt-2 text-base font-bold text-green-700">
                  Rp 185.000
                </div>
              </div>
            </div>
          </a>

          <a href="product.html" className="">
            <div className="m-1 min-w-[200px] rounded border border-gray-300 bg-gray-100 text-center">
              <img
                src="https://s-ecom.ottenstatic.com/thumbnail/63623e2a55335024133293.png"
                alt="Product 1"
                className="h-auto max-w-full rounded-t"
              ></img>
              <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">
                  Wanoja Kamojang Anaerobic Honey Process 200g Kopi Arabica
                </h3>
                <div className="mt-2 text-base font-bold text-green-700">
                  Rp 185.000
                </div>
              </div>
            </div>
          </a>

          <a href="product.html" className="">
            <div className="m-1 min-w-[200px] rounded border border-gray-300 bg-gray-100 text-center">
              <img
                src="https://s-ecom.ottenstatic.com/thumbnail/63623e2a55335024133293.png"
                alt="Product 1"
                className="h-auto max-w-full rounded-t"
              ></img>
              <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">
                  Wanoja Kamojang Anaerobic Honey Process 200g Kopi Arabica
                </h3>
                <div className="mt-2 text-base font-bold text-green-700">
                  Rp 185.000
                </div>
              </div>
            </div>
          </a>

          <a href="product.html" className="">
            <div className="m-1 min-w-[200px] rounded border border-gray-300 bg-gray-100 text-center">
              <img
                src="https://s-ecom.ottenstatic.com/thumbnail/63623e2a55335024133293.png"
                alt="Product 1"
                className="h-auto max-w-full rounded-t"
              ></img>
              <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">
                  Wanoja Kamojang Anaerobic Honey Process 200g Kopi Arabica
                </h3>
                <div className="mt-2 text-base font-bold text-green-700">
                  Rp 185.000
                </div>
              </div>
            </div>
          </a>

          <a href="product.html" className="">
            <div className="m-1 min-w-[200px] rounded border border-gray-300 bg-gray-100 text-center">
              <img
                src="https://s-ecom.ottenstatic.com/thumbnail/63623e2a55335024133293.png"
                alt="Product 1"
                className="h-auto max-w-full rounded-t"
              ></img>
              <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">
                  Wanoja Kamojang Anaerobic Honey Process 200g Kopi Arabica
                </h3>
                <div className="mt-2 text-base font-bold text-green-700">
                  Rp 185.000
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

export default Products;
