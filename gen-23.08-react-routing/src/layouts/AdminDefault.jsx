import { Outlet, useLocation } from "react-router-dom";

function AdminDefault() {
  const { pathname } = useLocation();

  const hideOnPages = ["/admin/login"];
  const showDefault = !hideOnPages.includes(pathname);
  console.log(showDefault);
  return (
    <>
      <main className="mx-auto max-w-7xl px-6">
        <Outlet />
      </main>
    </>
  );
}

export default AdminDefault;
