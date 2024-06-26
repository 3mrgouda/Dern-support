import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./contexts/auth";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Services from "./pages/Services";
import Articles from "./pages/Articles";
import ServiceByID from "./pages/ServiceByID";
import ScrollToTop from "./functions/ScrollToTop";
import Products from "./pages/products";
import ProductByID from "./pages/ProductByID";
import ArticleByID from "./pages/ArticleByID";

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
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceByID />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductByID />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleByID />} />
        <Route path="*" element={"page not found"} />
      </Routes>
      <Footer />
    </div>
  );
}
