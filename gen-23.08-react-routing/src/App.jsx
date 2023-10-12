import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import AdminDefault from "./layouts/AdminDefault";
import AdminDefaultProtected from "./layouts/AdminDefaultProtected";
import Default from "./layouts/Default";
import DefaultProtected from "./layouts/DefaultProtected";
import AdminHome from "./pages/admin/AdminHome";
import AdminLogin from "./pages/admin/AdminLogin";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Register from "./pages/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<Default />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="cart" element={<Cart />} />
        <Route path="categories" element={<Categories />} />
        <Route path="products/:productId" element={<ProductDetails />} />

        <Route element={<DefaultProtected isAuthorized={true} />}>
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Route>

      <Route element={<AdminDefault />}>
        <Route path="admin/login" element={<AdminLogin />} />

        <Route element={<AdminDefaultProtected isAuthorized={false} />}>
          <Route path="admin" element={<AdminHome />} />
        </Route>
      </Route>
    </Route>,
  ),
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
