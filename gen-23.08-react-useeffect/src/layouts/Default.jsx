import { Outlet } from "react-router-dom";

import BottomNav from "../components/layout/BottomNav";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

function Default() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-6">
        <Outlet />
      </main>

      <Footer />

      <BottomNav />
    </>
  );
}

export default Default;
