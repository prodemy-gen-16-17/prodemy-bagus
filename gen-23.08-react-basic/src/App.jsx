import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Products from "./pages/Products";

import Default from "./layouts/Default";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Default />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="cart" element={<Cart />} />
      <Route path="categories" element={<Categories />} />
      <Route path="products/:productId" element={<Products />} />
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
