// import axios from "axios";
// import { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

// import useSWR from "swr";
import BottomNav from "../components/layout/BottomNav";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
// import { AuthContext } from "../context/AuthProvider";
// import { CartContext } from "../context/CartProvider";

function Default() {
  const { pathname } = useLocation();
  const hideOnPages = ["/login", "/register"];
  const showDefault = !hideOnPages.includes(pathname);

  // const { auth } = useContext(AuthContext);
  // const { setCart } = useContext(CartContext);

  // // from json or api
  // async function fetcher(url) {
  //   const response = await axios.get(url);
  //   return response.data;
  // }

  // const { data: cartData } = useSWR(
  //   `http://localhost:3000/carts?userId=${auth.user.id}`,
  //   fetcher,
  // );

  // const carts = cartData ? cartData[0] : {};
  // const cartsId = carts?.id || -1;

  // const { data: cartItems, error: itemsError } = useSWR(
  //   `http://localhost:3000/carts/${cartsId}/cartItems?_expand=product`,
  //   fetcher,
  // );

  // useEffect(() => {
  //   if (!itemsError) {
  //     setCart({
  //       id: cartsId,
  //       products: cartItems,
  //       totalAmounts: cartItems?.reduce(
  //         (total, product) => total + product.amounts,
  //         0,
  //       ),
  //       totalPrice: cartItems?.reduce(
  //         (total, product) => total + product.subTotal,
  //         0,
  //       ),
  //     });
  //   }
  // }, [cartItems, cartsId, itemsError, setCart]);

  return (
    <>
      {showDefault && <Header />}

      <main className="mx-auto max-w-7xl px-6">
        <Outlet />
      </main>

      {showDefault && (
        <>
          <Footer />

          <BottomNav />
        </>
      )}
    </>
  );
}

export default Default;
