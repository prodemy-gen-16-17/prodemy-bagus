import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Carousel from "../components/Carousel";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import { categories, products, promos } from "../db.json";

function Home() {
  const [sortBy, setSortBy] = useState("");

  function handleSortByChanged(event) {
    setSortBy(event.target.value);
  }

  useEffect(() => {
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

  function sortProduct(sortBy, products) {
    // https://www.w3schools.com/js/js_array_sort.asp

    const sortedProducts = [...products];
    switch (sortBy) {
      case "date-desc":
        sortedProducts.sort(function (a, b) {
          return new Date(b.releasedAt) - new Date(a.releasedAt);
        });
        break;
      case "date-asc":
        sortedProducts.sort(function (a, b) {
          return new Date(a.releasedAt) - new Date(b.releasedAt);
        });
        break;
      case "price-desc":
        sortedProducts.sort(function (a, b) {
          return b.price - a.price;
        });
        break;
      case "price-asc":
        sortedProducts.sort(function (a, b) {
          return a.price - b.price;
        });
        break;
      default:
        break;
    }

    return sortedProducts;
  }

  const productsList = sortProduct(sortBy, products).map(function (product) {
    return <ProductCard key={product.id} product={product} />;
  });

  const popularCategoryList = categories.map(function (category) {
    return <CategoryCard key={category.id} category={category} />;
  });

  return (
    <>
      {/* <Carousel></Carousel> */}
      <Carousel slideList={promos}></Carousel>

      {/* <!-- Exclusive Products --> */}
      <section className="text-center">
        <div className="flex items-center justify-between py-2">
          <h2 className="text-2xl">Exclusive Products</h2>
          <div className="flex gap-x-6">
            <select
              className="select"
              value={sortBy}
              onChange={handleSortByChanged}
            >
              {optionsList}
            </select>
            <Link to={`/search?sortBy=${sortBy}`} className="btn btn-primary">
              See All
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {productsList}
        </div>
      </section>

      {/* <!-- Popular Category --> */}
      <section className="text-center">
        <div className="flex items-center justify-between py-2">
          <h2 className="text-2xl">Popular Category</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {popularCategoryList}
        </div>
      </section>
    </>
  );
}

export default Home;
