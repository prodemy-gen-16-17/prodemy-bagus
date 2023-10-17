import { Outlet, useLocation } from "react-router-dom";

import BottomNav from "../components/layout/BottomNav";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

function Default() {
  const { pathname } = useLocation();
  const hideOnPages = ["/login", "/register"];
  const showDefault = !hideOnPages.includes(pathname);

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
