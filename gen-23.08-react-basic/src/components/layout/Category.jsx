import { useState } from "react";
import { Link } from "react-router-dom";

function Category() {
  const [activeTab, setActiveTab] = useState("tabs-category-1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

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
          <ul className="tabs flex-col">
            <li
              role="presentation"
              className={`tab my-2 ${
                activeTab === "tabs-category-1" ? "tab-active" : ""
              }`}
              onClick={() => handleTabClick("tabs-category-1")}
            >
              <a className="text-lg">Category 1</a>
            </li>
            <li
              role="presentation"
              className={`tab my-2 ${
                activeTab === "tabs-category-2" ? "tab-active" : ""
              }`}
              onClick={() => handleTabClick("tabs-category-2")}
            >
              <a className="text-lg">Category 2</a>
            </li>
            <li
              role="presentation"
              className={`tab my-2 ${
                activeTab === "tabs-category-3" ? "tab-active" : ""
              }`}
              onClick={() => handleTabClick("tabs-category-3")}
            >
              <a className="text-lg">Category 3</a>
            </li>
            <li
              role="presentation"
              className={`tab my-2 ${
                activeTab === "tabs-category-4" ? "tab-active" : ""
              }`}
              onClick={() => handleTabClick("tabs-category-4")}
            >
              <a className="text-lg">Category 4</a>
            </li>
            <li
              role="presentation"
              className={`tab my-2 ${
                activeTab === "tabs-category-5" ? "tab-active" : ""
              }`}
              onClick={() => handleTabClick("tabs-category-5")}
            >
              <a className="text-lg">Category 5</a>
            </li>
            <li
              role="presentation"
              className={`tab my-2 ${
                activeTab === "tabs-category-6" ? "tab-active" : ""
              }`}
              onClick={() => handleTabClick("tabs-category-6")}
            >
              <a className="text-lg">Category 6</a>
            </li>
          </ul>
          <div className="flex-1 flex-wrap">
            <div
              className={`${
                activeTab === "tabs-category-1" ? "block" : "hidden"
              } transition-opacity duration-150 ease-linear`}
              id="tabs-category-1"
              role="tabpanel"
              aria-labelledby="tabs-category-1"
            >
              <div className="flex flex-wrap">
                <Link className="m-2">
                  Subcategory 1
                </Link>
                <Link className="m-2">
                  Subcategory 2
                </Link>
                <Link className="m-2">
                  Subcategory 3
                </Link>
                <Link className="m-2">
                  Subcategory 4
                </Link>
                <Link className="m-2">
                  Subcategory 5
                </Link>
                <Link className="m-2">
                  Subcategory 6
                </Link>
                <Link className="m-2">
                  Subcategory 7
                </Link>
                <Link className="m-2">
                  Subcategory 8
                </Link>
                <Link className="m-2">
                  Subcategory 9
                </Link>
                <Link className="m-2">
                  Subcategory 10
                </Link>
              </div>
            </div>
            <div
              className={`${
                activeTab === "tabs-category-2" ? "block" : "hidden"
              } transition-opacity duration-150 ease-linear`}
              id="tabs-category-2"
              role="tabpanel"
              aria-labelledby="tabs-category-2"
            >
              <div className="flex flex-wrap">
                <Link className="m-2">
                  Subcategory 1
                </Link>
                <Link className="m-2">
                  Subcategory 2
                </Link>
                <Link className="m-2">
                  Subcategory 3
                </Link>
              </div>
            </div>
            <div
              className={`${
                activeTab === "tabs-category-3" ? "block" : "hidden"
              } transition-opacity duration-150 ease-linear`}
              id="tabs-category-3"
              role="tabpanel"
              aria-labelledby="tabs-category-3"
            >
              <div className="flex flex-wrap">
                <Link className="m-2">
                  Subcategory 1
                </Link>
                <Link className="m-2">
                  Subcategory 2
                </Link>
                <Link className="m-2">
                  Subcategory 3
                </Link>
                <Link className="m-2">
                  Subcategory 4
                </Link>
                <Link className="m-2">
                  Subcategory 5
                </Link>
              </div>
            </div>
            <div
              className={`${
                activeTab === "tabs-category-4" ? "block" : "hidden"
              } transition-opacity duration-150 ease-linear`}
              id="tabs-category-4"
              role="tabpanel"
              aria-labelledby="tabs-category-4"
            >
              <div className="flex flex-wrap">
                <Link className="m-2">
                  Subcategory 1
                </Link>
                <Link className="m-2">
                  Subcategory 2
                </Link>
                <Link className="m-2">
                  Subcategory 3
                </Link>
                <Link className="m-2">
                  Subcategory 4
                </Link>
                <Link className="m-2">
                  Subcategory 5
                </Link>
                <Link className="m-2">
                  Subcategory 6
                </Link>
                <Link className="m-2">
                  Subcategory 7
                </Link>
              </div>
            </div>
            <div
              className={`${
                activeTab === "tabs-category-5" ? "block" : "hidden"
              } transition-opacity duration-150 ease-linear`}
              id="tabs-category-5"
              role="tabpanel"
              aria-labelledby="tabs-category-5"
            >
              <div className="flex flex-wrap">
                <Link className="m-2">
                  Subcategory 1
                </Link>
                <Link className="m-2">
                  Subcategory 2
                </Link>
                <Link className="m-2">
                  Subcategory 3
                </Link>
                <Link className="m-2">
                  Subcategory 4
                </Link>
                <Link className="m-2">
                  Subcategory 5
                </Link>
                <Link className="m-2">
                  Subcategory 6
                </Link>
                <Link className="m-2">
                  Subcategory 7
                </Link>
                <Link className="m-2">
                  Subcategory 8
                </Link>
                <Link className="m-2">
                  Subcategory 9
                </Link>
              </div>
            </div>
            <div
              className={`${
                activeTab === "tabs-category-6" ? "block" : "hidden"
              } transition-opacity duration-150 ease-linear`}
              id="tabs-category-6"
              role="tabpanel"
              aria-labelledby="tabs-category-6"
            >
              <div className="flex flex-wrap">
                <Link className="m-2">
                  Subcategory 1
                </Link>
                <Link className="m-2">
                  Subcategory 2
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </details>
  );
}

export default Category;
