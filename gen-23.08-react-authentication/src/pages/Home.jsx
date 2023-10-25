import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";

import { getAllItems } from "../api/api";
import { CATEGORIES, PRODUCTS, PROMOS } from "../api/routes";
import Carousel from "../components/Carousel";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";

function Home() {
  const [sortBy, setSortBy] = useState("");

  function handleSortByChanged(event) {
    const sort = event.target.value;
    setSortBy(sort);
    sortProduct(sort);
  }

  useEffect(function () {
    setSortBy("date-desc");
  }, []);

  const options = [
    { value: "", label: "Urutkan" },
    { value: "date-desc", label: "Paling Baru" },
    { value: "date-asc", label: "Paling Lama" },
    { value: "price-desc", label: "Harga Tertinggi" },
    { value: "price-asc", label: "Harga Terendah" },
  ];

  const optionsList = options.map(function (option) {
    return (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    );
  });

  function sortProduct(sortBy) {
    // https://www.w3schools.com/js/js_array_sort.asp

    switch (sortBy) {
      case "date-desc":
        products.sort(function (a, b) {
          return new Date(b.releasedAt) - new Date(a.releasedAt);
        });
        break;
      case "date-asc":
        products.sort(function (a, b) {
          return new Date(a.releasedAt) - new Date(b.releasedAt);
        });
        break;
      case "price-desc":
        products.sort(function (a, b) {
          return b.price - a.price;
        });
        break;
      case "price-asc":
        products.sort(function (a, b) {
          return a.price - b.price;
        });
        break;
      default:
        break;
    }
  }

  const { data: products } = useSWR(PRODUCTS, getAllItems, {
    onSuccess: function (data) {
      return data.sort(function (a, b) {
        return new Date(b.releasedAt) - new Date(a.releasedAt);
      });
    },
  });

  const { data: categories } = useSWR(`${CATEGORIES}?_limit=6`, getAllItems);

  const { data: promos } = useSWR(PROMOS, getAllItems);

  return (
    <>
      {promos ? (
        <Carousel slideList={promos}></Carousel>
      ) : (
        <div className="flex items-center justify-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}

      {/* <!-- Exclusive Products --> */}
      <section className="text-center">
        <div className="flex items-center justify-between py-2">
          <h2 className="text-2xl">Exclusive Products</h2>
          <div className="flex flex-wrap justify-end gap-x-2">
            <select
              className="select w-full min-[306px]:w-[159px]"
              value={sortBy}
              onChange={handleSortByChanged}
            >
              {optionsList}
            </select>
            <Link to={`/products?sortBy=${sortBy}`} className="btn btn-primary">
              See All
            </Link>
          </div>
        </div>

        {products ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {products.map(function (product) {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        )}
      </section>

      {/* <!-- Popular Category --> */}
      <section className="text-center">
        <div className="flex items-center justify-between py-2">
          <h2 className="text-2xl">Popular Category</h2>
        </div>

        {categories ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {categories.map(function (category) {
              return <CategoryCard key={category.id} category={category} />;
            })}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        )}
      </section>
    </>
  );
}

export default Home;
