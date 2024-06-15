import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./contexts/auth";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsPage from "./pages/NewsPage";
import ProductsPage from "./pages/ProductsPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  const { user } = useAuth();

  return (
    <div className="font-poppins w-full overflow-hidden">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/articles" element={<NewsPage />} />
        <Route path="*" element={"page not found"} />
      </Routes>
      <Footer />
    </div>
  );
}
