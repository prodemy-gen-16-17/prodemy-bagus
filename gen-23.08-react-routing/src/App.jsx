import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Default from "./layouts/Default";
import AdminLogin from "./pages/admin/AdminLogin";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Register from "./pages/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Default />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="cart" element={<Cart />} />
      <Route path="categories" element={<Categories />} />
      <Route path="products/:productId" element={<Products />} />

      <Route path="admin/login" element={<AdminLogin />} />
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
