document.getElementById("category-btn").addEventListener("click", function () {
  var dropdownContent = document.getElementById("category-dropdown");
  dropdownContent.classList.toggle("hidden");
});

function showDropdown() {
  document.querySelector("#search-bar-dropdown").classList.remove("hidden");
}

async function searchProduct() {
  document.querySelector("#search-bar-dropdown").classList.remove("hidden");

  const searchValue = document.querySelector("#search-bar").value;

  const searchBarResult = document.querySelector("#search-bar-result");

  try {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${searchValue}`
    );
    const data = await response.json();

    console.log(data.products.map((product) => product.title));

    searchBarResult.innerHTML = "";

    for (const product of data.products) {
      searchBarResult.innerHTML += `
        <a
          href="#product.html?id=${product.id}"
          class="end:my-1 m-1 rounded-full border border-gray-300 px-4 py-2 text-gray-800 first:my-1 first:mr-1"
        >
          ${product.title}
        </a>
        `;
    }
  } catch (err) {
    console.log("error: ", err);
  }
}

function hideDropdown() {
  document.querySelector("#search-bar-dropdown").classList.add("hidden");
}
