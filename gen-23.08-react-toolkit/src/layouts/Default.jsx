import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";

import BottomNav from "../components/layout/BottomNav";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { fetchCartByUserId } from "../redux/reducers/cartSlice";

function Default() {
  const { pathname } = useLocation();
  const hideOnPages = ["/login", "/register"];
  const showDefault = !hideOnPages.includes(pathname);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartByUserId());
  }, [dispatch]);

  return (
    <>
      {showDefault && <Header />}

      <main className="mx-auto max-w-7xl p-6">
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
