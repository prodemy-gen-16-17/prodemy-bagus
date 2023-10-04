document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("product-list.json");
    const data = await response.json();

    const exclusiveProductList = document.querySelector(
      "#exclusive-product-list",
    );

    const newestProductList = document.querySelector("#newest-product-list");

    for (const [i, value] of data.entries()) {
      // console.log("%d: %s", i, value);

      exclusiveProductList.innerHTML += `
        <a href="product.html?id=${i}" class="">
            <div class="rounded border border-gray-300 bg-gray-100 text-center">
            <img
                src="${value.gambar[0]}"
                alt="Product ${i}"
                class="h-auto w-full rounded-t"
            />
            <div class="p-3">
                <h3 class="line-clamp-2 text-lg font-bold">
                    ${value.nama}
                </h3>
                <div class="mt-2 text-base font-bold text-green-700">
                    Rp ${value.harga}
                </div>
            </div>
            </div>
        </a>
        `;

      newestProductList.innerHTML += `
        <a href="product.html?id=${i}" class="">
            <div class="rounded border border-gray-300 bg-gray-100 text-center">
            <img
                src="${value.gambar[0]}"
                alt="Product ${i}"
                class="h-auto w-full rounded-t"
            />
            <div class="p-3">
                <h3 class="line-clamp-2 text-lg font-bold">
                    ${value.nama}
                </h3>
                <div class="mt-2 text-base font-bold text-green-700">
                    Rp ${value.harga}
                </div>
            </div>
            </div>
        </a>
        `;
    }
  } catch (err) {
    console.log("error: ", err);
  }
});
