document.addEventListener("DOMContentLoaded", async () => {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    let productId = -1;
    let product;

    const response = await fetch("product-list.json");
    const data = await response.json();

    if (urlParams.has("id")) {
      productId = parseInt(urlParams.get("id"));
    }

    product = data[productId];

    const carouselItemImgDesktop = document.querySelector(
      "#szczcarousel-item-img-desktop",
    );
    const carouselItemBtnDesktop = document.querySelector(
      "#szczcarousel-item-btn-desktop",
    );
    const carouselItemImgMobile = document.querySelector(
      "#szczcarousel-item-img-mobile",
    );
    const carouselItemBtnMobile = document.querySelector(
      "#szczcarousel-item-btn-mobile",
    );

    for (const [i, value] of product.gambar.entries()) {
      // console.log("%d: %s", i, value);

      const isActive = i === 0;

      carouselItemImgDesktop.innerHTML += `
            <div
                class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
                ${isActive ? "data-te-carousel-active" : ""}
            >
                <img
                    src="${value}"
                    class="block w-full rounded-lg"
                />
            </div>
            `;

      carouselItemBtnDesktop.innerHTML += `
            <button
                type="button"
                data-te-target="#carousel-desktop-indicator"
                data-te-slide-to="${i}"
                ${isActive ? "data-te-carousel-active" : ""}
                class="m-2 w-20 flex-initial cursor-pointer bg-clip-padding -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                ${isActive ? `aria-current="true"` : `aria-current="false"`} 
                aria-label="Slide ${i + 1}"
            >
                <img
                    src="${value}"
                    class="rounded"
                />
            </button>
            `;

      carouselItemBtnMobile.innerHTML += `
            <button
                type="button"
                data-te-target="#carousel-mobile-indicator"
                data-te-slide-to="${i}"
                ${isActive ? "data-te-carousel-active" : ""}
                class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-green-500 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                ${isActive ? `aria-current="true"` : `aria-current="false"`} 
                aria-label="Slide ${i + 1}"
            ></button>
            `;

      carouselItemImgMobile.innerHTML += `
            <div
                class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
                ${isActive ? "data-te-carousel-active" : ""}
            >
                <img
                    src="${value}"
                    class="block w-full rounded-xl"
                />
            </div>
            `;
    }

    document.querySelector("#product-nama-breadcrumb").innerHTML = product.nama;
    document.querySelector("#product-nama").innerHTML = product.nama;
    document.querySelector("#product-rating").innerHTML = product.rating;
    document.querySelector("#product-review").innerHTML = product.jumlahReview;
    document.querySelector("#product-brand").innerHTML = product.brand;
    document.querySelector("#product-sku").innerHTML = product.sku;
    document.querySelector("#product-harga").innerHTML = product.harga;
    document.querySelector("#product-sku").innerHTML = product.sku;

    const promoList = document.querySelector("#product-promo");
    for (const promo of product.promo) {
      promoList.innerHTML += `
              <span class="m-1">&bull;</span>
              <div class="m-1 inline">${promo}</div>
            `;
    }

    const stokList = document.querySelector("#product-stok");
    for (const stok of product.stok) {
      stokList.innerHTML += `
            <div class="rounded border-2 p-3">
                <h4 class="font-bold first-letter:uppercase">${stok.tempat}</h4>
                <p class="first-letter:uppercase">${
                  stok.jumlah == 0 ? "habis" : stok.jumlah
                }</p>
            </div>
            `;
    }

    const productTerkait = document.querySelector("#product-terkait");

    for (const [i, value] of data.entries()) {
      // console.log("%d: %s", i, value);

      productTerkait.innerHTML += `
          <a href="product.html?id=${i}" class="">
            <div class="m-1 border border-gray-300 bg-gray-100 text-center rounded min-w-[200px]">
              <img
                src="${value.gambar[0]}"
                alt="Product 1"
                class="h-auto max-w-full rounded-t"
              />
              <div class="p-3">
                <h3 class="line-clamp-2 text-lg font-bold">${value.nama}</h3>
                <div class="mt-2 text-base font-bold text-green-700">Rp ${value.harga}</div>
              </div>
            </div>
          </a>
     `;
    }

    // console.log(productId, product);
  } catch (err) {
    console.log("error: ", err);
  }
});
