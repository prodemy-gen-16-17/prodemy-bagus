document
        .getElementById("category-btn")
        .addEventListener("click", function () {
          var dropdownContent = document.getElementById("category-dropdown");
          dropdownContent.classList.toggle("hidden");
        });

      function showDropdown() {
        document.getElementById("search-dropdown").classList.remove("hidden");
        document
          .getElementById("close-search-dropdown-btn")
          .classList.remove("hidden");
      }

      function hideDropdown() {
        document.getElementById("search-dropdown").classList.add("hidden");
        document
          .getElementById("close-search-dropdown-btn")
          .classList.add("hidden");
      }