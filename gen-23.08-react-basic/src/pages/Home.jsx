import Carousels from "../components/Carousels";

function Home() {
  return (
    <>
      <Carousels></Carousels>
      
      {/* <!-- Exclusive Products --> */}
      <section className="text-center">
        <div className="flex items-center justify-between py-2">
          <h2 className="text-2xl">Exclusive Products</h2>
          <a href="#search?exclusive=true" className="btn btn-primary">
            See All
          </a>
        </div>

        <div id="exclusive-product-list" className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">        
        <a href="products/0" className="">
            <div className="rounded border border-gray-300 bg-gray-100 text-center">
            <img src="https://s-ecom.ottenstatic.com/original/64f5950499e0b133674202.jpg" alt="Product 0" className="h-auto w-full rounded-t"></img>
            <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">
                    DiFluid - R1 Coffee Refractometer
                </h3>
                <div className="mt-2 text-base font-bold text-primary">
                    Rp 2.250.000
                </div>
            </div>
            </div>
        </a>
        
        <a href="products/1" className="">
            <div className="rounded border border-gray-300 bg-gray-100 text-center">
            <img src="https://s-ecom.ottenstatic.com/original/647024b097b35353051103.jpg" alt="Product 1" className="h-auto w-full rounded-t"></img>
            <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">
                    Fellow - Opus Conical Burr Grinder
                </h3>
                <div className="mt-2 text-base font-bold text-primary">
                    Rp 3.750.000
                </div>
            </div>
            </div>
        </a>
        
        <a href="products/2" className="">
            <div className="rounded border border-gray-300 bg-gray-100 text-center">
            <img src="https://s-ecom.ottenstatic.com/original/5fb39a14e68f9013271566.jpg" alt="Product 2" className="h-auto w-full rounded-t"></img>
            <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">
                    PourxOura - Coffee Scale
                </h3>
                <div className="mt-2 text-base font-bold text-primary">
                    Rp 2.950.000
                </div>
            </div>
            </div>
        </a>
        
        <a href="products/3" className="">
            <div className="rounded border border-gray-300 bg-gray-100 text-center">
            <img src="https://s-ecom.ottenstatic.com/original/63623e2a73275276583884.png" alt="Product 3" className="h-auto w-full rounded-t"></img>
            <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">
                    Wanoja Kamojang Anaerobic Honey Process 200g Kopi Arabica
                </h3>
                <div className="mt-2 text-base font-bold text-primary">
                    Rp 185.000
                </div>
            </div>
            </div>
        </a>
        
        <a href="products/4" className="">
            <div className="rounded border border-gray-300 bg-gray-100 text-center">
            <img src="https://s-ecom.ottenstatic.com/original/623833ae828b2493989332.jpg" alt="Product 4" className="h-auto w-full rounded-t"></img>
            <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">
                    Java Trawas Honey Process 200g Kopi Arabica
                </h3>
                <div className="mt-2 text-base font-bold text-primary">
                    Rp 124.000
                </div>
            </div>
            </div>
        </a>
        
        <a href="products/5" className="">
            <div className="rounded border border-gray-300 bg-gray-100 text-center">
            <img src="https://s-ecom.ottenstatic.com/original/60b8a014b2b7e545920384.jpg" alt="Product 5" className="h-auto w-full rounded-t"></img>
            <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">
                    Sidikalang 200g Kopi Arabica
                </h3>
                <div className="mt-2 text-base font-bold text-primary">
                    Rp 94.000
                </div>
            </div>
            </div>
        </a>
        </div>
      </section>

      {/* <!-- Popular Category --> */}
      <section className="text-center">
        <div className="flex items-center justify-between py-2">
          <h2 className="text-2xl">Popular Category</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <a href="#search?category=" className="">
            <div className="rounded border border-gray-300 bg-gray-100 text-center">
              <img src="https://s-ecom.ottenstatic.com/thumbnail/63623e2a55335024133293.png" alt="Category 1" className="h-auto w-full rounded-t"></img>
              <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">Category 1</h3>
              </div>
            </div>
          </a>

          <a href="#search?category=" className="">
            <div className="rounded border border-gray-300 bg-gray-100 text-center">
              <img src="https://s-ecom.ottenstatic.com/thumbnail/63623e2a55335024133293.png" alt="Category 1" className="h-auto w-full rounded-t"></img>
              <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">Category 1</h3>
              </div>
            </div>
          </a>

          <a href="#search?category=" className="">
            <div className="rounded border border-gray-300 bg-gray-100 text-center">
              <img src="https://s-ecom.ottenstatic.com/thumbnail/63623e2a55335024133293.png" alt="Category 1" className="h-auto w-full rounded-t"></img>
              <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">Category 1</h3>
              </div>
            </div>
          </a>

          <a href="#search?category=" className="">
            <div className="rounded border border-gray-300 bg-gray-100 text-center">
              <img src="https://s-ecom.ottenstatic.com/thumbnail/63623e2a55335024133293.png" alt="Category 1" className="h-auto w-full rounded-t"></img>
              <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">Category 1</h3>
              </div>
            </div>
          </a>

          <a href="#search?category=" className="">
            <div className="rounded border border-gray-300 bg-gray-100 text-center">
              <img src="https://s-ecom.ottenstatic.com/thumbnail/63623e2a55335024133293.png" alt="Category 1" className="h-auto w-full rounded-t"></img>
              <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">Category 1</h3>
              </div>
            </div>
          </a>

          <a href="#search?category=" className="">
            <div className="rounded border border-gray-300 bg-gray-100 text-center">
              <img src="https://s-ecom.ottenstatic.com/thumbnail/63623e2a55335024133293.png" alt="Category 1" className="h-auto w-full rounded-t"></img>
              <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">Category 1</h3>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* <!-- Newest Products --> */}
      <section className="text-center">
        <div className="flex items-center justify-between py-2">
          <h2 className="text-2xl">Newest Products</h2>
          <a href="#search?date=desc" className="btn btn-primary">
            See All
          </a>
        </div>
        <div id="newest-product-list" className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <a href="product.html" className="">
            <div className="rounded border border-gray-300 bg-gray-100 text-center">
              <img src="https://s-ecom.ottenstatic.com/thumbnail/63623e2a55335024133293.png" alt="Product 1" className="h-auto w-full rounded-t"></img>
              <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">
                  Wanoja Kamojang Anaerobic Honey Process 200g Kopi Arabica
                </h3>
                <div className="mt-2 text-base font-bold text-primary">
                  Rp 185.000
                </div>
              </div>
            </div>
          </a>

          <a href="product.html" className="">
            <div className="rounded border border-gray-300 bg-gray-100 text-center">
              <img src="https://s-ecom.ottenstatic.com/thumbnail/63623e2a55335024133293.png" alt="Product 1" className="h-auto w-full rounded-t"></img>
              <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">
                  Wanoja Kamojang Anaerobic Honey Process 200g Kopi Arabica
                </h3>
                <div className="mt-2 text-base font-bold text-primary">
                  Rp 185.000
                </div>
              </div>
            </div>
          </a>

          <a href="product.html" className="">
            <div className="rounded border border-gray-300 bg-gray-100 text-center">
              <img src="https://s-ecom.ottenstatic.com/thumbnail/63623e2a55335024133293.png" alt="Product 1" className="h-auto w-full rounded-t"></img>
              <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">
                  Wanoja Kamojang Anaerobic Honey Process 200g Kopi Arabica
                </h3>
                <div className="mt-2 text-base font-bold text-primary">
                  Rp 185.000
                </div>
              </div>
            </div>
          </a>

          <a href="product.html" className="">
            <div className="rounded border border-gray-300 bg-gray-100 text-center">
              <img src="https://s-ecom.ottenstatic.com/thumbnail/63623e2a55335024133293.png" alt="Product 1" className="h-auto w-full rounded-t"></img>
              <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">
                  Wanoja Kamojang Anaerobic Honey Process 200g Kopi Arabica
                </h3>
                <div className="mt-2 text-base font-bold text-primary">
                  Rp 185.000
                </div>
              </div>
            </div>
          </a>

          <a href="product.html" className="">
            <div className="rounded border border-gray-300 bg-gray-100 text-center">
              <img src="https://s-ecom.ottenstatic.com/thumbnail/63623e2a55335024133293.png" alt="Product 1" className="h-auto w-full rounded-t"></img>
              <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">
                  Wanoja Kamojang Anaerobic Honey Process 200g Kopi Arabica
                </h3>
                <div className="mt-2 text-base font-bold text-primary">
                  Rp 185.000
                </div>
              </div>
            </div>
          </a>

          <a href="product.html" className="">
            <div className="rounded border border-gray-300 bg-gray-100 text-center">
              <img src="https://s-ecom.ottenstatic.com/thumbnail/63623e2a55335024133293.png" alt="Product 1" className="h-auto w-full rounded-t"></img>
              <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">
                  Wanoja Kamojang Anaerobic Honey Process 200g Kopi Arabica
                </h3>
                <div className="mt-2 text-base font-bold text-primary">
                  Rp 185.000
                </div>
              </div>
            </div>
          </a>
        
        <a href="products/0" className="">
            <div className="rounded border border-gray-300 bg-gray-100 text-center">
            <img src="https://s-ecom.ottenstatic.com/original/64f5950499e0b133674202.jpg" alt="Product 0" className="h-auto w-full rounded-t"></img>
            <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">
                    DiFluid - R1 Coffee Refractometer
                </h3>
                <div className="mt-2 text-base font-bold text-primary">
                    Rp 2.250.000
                </div>
            </div>
            </div>
        </a>
        
        <a href="products/1" className="">
            <div className="rounded border border-gray-300 bg-gray-100 text-center">
            <img src="https://s-ecom.ottenstatic.com/original/647024b097b35353051103.jpg" alt="Product 1" className="h-auto w-full rounded-t"></img>
            <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">
                    Fellow - Opus Conical Burr Grinder
                </h3>
                <div className="mt-2 text-base font-bold text-primary">
                    Rp 3.750.000
                </div>
            </div>
            </div>
        </a>
        
        <a href="products/2" className="">
            <div className="rounded border border-gray-300 bg-gray-100 text-center">
            <img src="https://s-ecom.ottenstatic.com/original/5fb39a14e68f9013271566.jpg" alt="Product 2" className="h-auto w-full rounded-t"></img>
            <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">
                    PourxOura - Coffee Scale
                </h3>
                <div className="mt-2 text-base font-bold text-primary">
                    Rp 2.950.000
                </div>
            </div>
            </div>
        </a>
        
        <a href="products/3" className="">
            <div className="rounded border border-gray-300 bg-gray-100 text-center">
            <img src="https://s-ecom.ottenstatic.com/original/63623e2a73275276583884.png" alt="Product 3" className="h-auto w-full rounded-t"></img>
            <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">
                    Wanoja Kamojang Anaerobic Honey Process 200g Kopi Arabica
                </h3>
                <div className="mt-2 text-base font-bold text-primary">
                    Rp 185.000
                </div>
            </div>
            </div>
        </a>
        
        <a href="products/4" className="">
            <div className="rounded border border-gray-300 bg-gray-100 text-center">
            <img src="https://s-ecom.ottenstatic.com/original/623833ae828b2493989332.jpg" alt="Product 4" className="h-auto w-full rounded-t"></img>
            <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">
                    Java Trawas Honey Process 200g Kopi Arabica
                </h3>
                <div className="mt-2 text-base font-bold text-primary">
                    Rp 124.000
                </div>
            </div>
            </div>
        </a>
        
        <a href="products/5" className="">
          <div className="rounded border border-gray-300 bg-gray-100 text-center">
            <img src="https://s-ecom.ottenstatic.com/original/60b8a014b2b7e545920384.jpg" alt="Product 5" className="h-auto w-full rounded-t"></img>
            <div className="p-3">
                <h3 className="line-clamp-2 text-lg font-bold">
                    Sidikalang 200g Kopi Arabica
                </h3>
                <div className="mt-2 text-base font-bold text-primary">
                    Rp 94.000
                </div>
            </div>
            </div>
        </a>
        </div>
      </section>
    </>
  );
}

export default Home;
