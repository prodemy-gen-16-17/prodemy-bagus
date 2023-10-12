import { Outlet, useLocation } from "react-router-dom";

import BottomNav from "../components/layout/BottomNav";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

function Default() {
  const { pathname } = useLocation();
  const hideOnPages = ["/login", "/register", "/admin/login"];
  const shouldNotRendered = hideOnPages.includes(pathname);

  return (
    <>
      {shouldNotRendered ? null : <Header />}

      <main className="mx-auto max-w-7xl px-6">
        <Outlet />
      </main>

      {shouldNotRendered ? null : (
        <>
          <Footer />

          <BottomNav />
        </>
      )}
    </>
  );
}

export default Default;
