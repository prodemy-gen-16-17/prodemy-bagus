import { Link } from "react-router-dom";
import Category from "./Category";

function Header() {
  const showSearchDropdown = () => {
    const dropdown = document.getElementById("search-dropdown");
    const button = document.getElementById("close-search-dropdown-btn");

    dropdown.setAttribute("open", "");
    button.classList.remove("hidden");
  };

  const hideSearchDropdown = (event) => {
    const dropdown = document.getElementById("search-dropdown");
    const button = document.getElementById("close-search-dropdown-btn");

    if (
      event.relatedTarget === dropdown ||
      dropdown.contains(event.relatedTarget) ||
      event.relatedTarget === button ||
      button.contains(event.relatedTarget)
    ) {
      return;
    }

    dropdown.removeAttribute("open");
    button.classList.add("hidden");
  };
  return (
    <>
      <header className="sticky top-0 z-50 bg-base-100">
        <div className="navbar mx-auto max-w-7xl space-x-1">
          <Link className="btn hidden border-0 bg-base-100 text-2xl text-primary sm:inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 fill-primary md:hidden"
              viewBox="0 0 576 512"
            >
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
            </svg>
            <span className="hidden md:inline">Kaffee</span>
          </Link>

          <Category></Category>

          <details id="search-dropdown" className="dropdown flex flex-1">
            <summary className="flex flex-1">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative flex flex-1">
                <div className="pointer-events-none absolute inset-y-0 flex flex-none items-center pl-3">
                  <svg
                    className="h-5 w-5 fill-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  id="search"
                  name="search"
                  className="input input-primary flex-1 px-10 py-1.5"
                  placeholder="Search"
                  type="search"
                  onFocus={showSearchDropdown}
                  onBlur={hideSearchDropdown}
                />
                <button
                  id="close-search-dropdown-btn"
                  className="absolute inset-y-0 right-0 hidden flex-none items-center pr-3"
                  onClick={hideSearchDropdown}
                >
                  <svg
                    className="h-5 w-5 fill-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                  </svg>
                </button>
              </div>
            </summary>

            <div className="dropdown-content rounded-box z-[1] w-full bg-base-100 p-2 shadow">
              <div className="py-2">Popular Search</div>
              <div className="flex flex-wrap">
                <Link
                  href="#"
                  className="end:my-1 m-1 rounded-full border border-gray-300 px-4 py-2 text-gray-800 first:my-1 first:mr-1"
                >
                  Result 1
                </Link>
                <Link
                  href="#"
                  className="end:my-1 m-1 rounded-full border border-gray-300 px-4 py-2 text-gray-800 first:my-1 first:mr-1"
                >
                  Result 2
                </Link>
                <Link
                  href="#"
                  className="end:my-1 m-1 rounded-full border border-gray-300 px-4 py-2 text-gray-800 first:my-1 first:mr-1"
                >
                  Result 3
                </Link>
                <Link
                  href="#"
                  className="end:my-1 m-1 rounded-full border border-gray-300 px-4 py-2 text-gray-800 first:my-1 first:mr-1"
                >
                  Result 3
                </Link>
              </div>
              <div className="py-2">Recent Search</div>
              <div className="flex flex-wrap">
                <Link
                  href="#"
                  className="end:my-1 m-1 rounded-full border border-gray-300 px-4 py-2 text-gray-800 first:my-1 first:mr-1"
                >
                  Result 1
                </Link>
                <Link
                  href="#"
                  className="end:my-1 m-1 rounded-full border border-gray-300 px-4 py-2 text-gray-800 first:my-1 first:mr-1"
                >
                  Result 2
                </Link>
                <Link
                  href="#"
                  className="end:my-1 m-1 rounded-full border border-gray-300 px-4 py-2 text-gray-800 first:my-1 first:mr-1"
                >
                  Result 3
                </Link>
              </div>
            </div>
          </details>

          <Link
            to={"/cart"}
            className="btn hidden border-0 bg-base-100 sm:inline-flex"
          >
            <div className="indicator flex items-center text-center">
              <span className="badge indicator-item badge-primary px-1">8</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="ml-1 hidden py-3 md:inline">Cart</span>
            </div>
          </Link>

          <Link
            to={"/login"}
            className="btn hidden border-0 bg-base-100 sm:inline-flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 fill-primary"
              viewBox="0 0 512 512"
            >
              <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
            </svg>
            <span className="ml-1 hidden md:inline">Login</span>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
