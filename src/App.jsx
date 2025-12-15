import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router";
import { useAuthContext } from "./context/AuthContext";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import AddProduct from "./pages/AddProduct/AddProduct";
import EditProduct from "./pages/EditProduct/EditProduct";
import Admin from "./pages/Admin/Admin";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

function App() {
  const { isAuthenticated } = useAuthContext();

  return (
    <div className="app">
      <Header />
      <div className="app__content">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/productos/:id" element={<Product />} />
          <Route
            path="/carrito"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/agregar-producto"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <AddProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/editar-producto/:id"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <EditProduct />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
