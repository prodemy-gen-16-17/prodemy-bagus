import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

import { categories, superCategories } from "../../db.json";

function CategoryTabNav({
  superCategoryName,
  index,
  activeTab,
  handleTabClick,
}) {
  return (
    <>
      <li
        role="presentation"
        className={`tab my-2 w-full ${activeTab === index ? "tab-active" : ""}`}
        onClick={() => handleTabClick(index)}
      >
        <a className="text-lg">{superCategoryName}</a>
      </li>
    </>
  );
}

CategoryTabNav.propTypes = {
  superCategoryName: PropTypes.string,
  index: PropTypes.number,
  activeTab: PropTypes.number,
  handleTabClick: PropTypes.func,
};

function CategoryTabContent({ categoryIds, index, activeTab }) {
  const categoryIdsList = categoryIds.map(function (categoryId) {
    const categoryIdDetail = categories.find(function (category) {
      return category.id === categoryId;
    });

    return (
      <Link key={categoryIdDetail.id} className="m-2">
        {categoryIdDetail.name}
      </Link>
    );
  });

  return (
    <>
      <div
        className={`${activeTab === index ? "block" : "hidden"}`}
        id={index}
        role="tabpanel"
        aria-labelledby={`tab-${index}`}
      >
        <div className="flex flex-wrap">{categoryIdsList}</div>
      </div>
    </>
  );
}

CategoryTabContent.propTypes = {
  categoryIds: PropTypes.array,
  index: PropTypes.number,
  activeTab: PropTypes.number,
};

function Category() {
  const [activeTab, setActiveTab] = useState(0);

  function handleTabClick(tabId) {
    setActiveTab(tabId);
  }

  const categoriesTabNavList = superCategories.map(
    function (superCategory, index) {
      return (
        <CategoryTabNav
          key={superCategory.id}
          superCategoryName={superCategory.name}
          index={index}
          activeTab={activeTab}
          handleTabClick={handleTabClick}
        ></CategoryTabNav>
      );
    },
  );

  const categoriesTabContentList = superCategories.map(
    function (superCategory, index) {
      return (
        <CategoryTabContent
          key={superCategory.id}
          categoryIds={superCategory.categoryId}
          index={index}
          activeTab={activeTab}
        ></CategoryTabContent>
      );
    },
  );

  return (
    <details className="dropdown hidden sm:block">
      <summary className="btn border-0 bg-base-100">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="grid-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="h-5 text-primary"
        >
          <path
            fill="currentColor"
            d="M224 80c0-26.5-21.5-48-48-48H80C53.5 32 32 53.5 32 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80zm0 256c0-26.5-21.5-48-48-48H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336zM288 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48zM480 336c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336z"
            className=""
          ></path>
        </svg>
        <span className="hidden min-[821px]:inline">Category</span>
      </summary>
      <div className="dropdown-content rounded-box z-[1] bg-base-100 p-2 shadow sm:w-[calc(100vw_-_108px)] md:w-[calc(100vw_-_254px)] xl:w-[1010px]">
        <div className="flex">
          <ul className="tabs flex-col items-start">{categoriesTabNavList}</ul>
          <div className="flex-1 flex-wrap">{categoriesTabContentList}</div>
        </div>
      </div>
    </details>
  );
}

export default Category;
