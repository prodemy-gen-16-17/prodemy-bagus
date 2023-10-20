import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// import { AuthProvider } from "./context/AuthProvider";
// import { CartProvider } from "./context/CartProvider";
import AdminDefault from "./layouts/AdminDefault";
import AdminDefaultProtected from "./layouts/AdminDefaultProtected";
import Default from "./layouts/Default";
import DefaultProtected from "./layouts/DefaultProtected";
import AdminHome from "./pages/admin/AdminHome";
import AdminLogin from "./pages/admin/AdminLogin";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Checkout from "./pages/Checkout";
import Form from "./pages/Form";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Register from "./pages/Register";
import store from "./redux/store";

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

        <Route path="form" element={<Form />} />

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
      <Provider store={store}>
        {/* <AuthProvider> */}
        {/* <CartProvider> */}
        <RouterProvider router={router} />
        {/* </CartProvider> */}
        {/* </AuthProvider> */}
      </Provider>
    </>
  );
}

export default App;
