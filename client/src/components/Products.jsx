import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/products`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  const latestProducts = products.slice(-3).reverse();

  return (
    <div className="container mx-auto px-4 my-28">
      <h1 className="text-4xl font-bold text-center mb-12">
        Latest
        <span className="text-red-600 border-b-2 border-black">Products</span>
      </h1>
      <div className="cards flex flex-wrap gap-8 justify-center w-full">
        {latestProducts.map((product) => (
          <div
            key={product._id}
            className="product-card max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-500 hover:shadow-2xl w-full"
          >
            <img
              className="w-full h-64 object-contain transform transition duration-500 hover:scale-105 hover:cursor-pointer"
              src={product.img}
              alt={product.name}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center text-nowrap">
                {product.name.slice(0, 20)}
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700 text-base mb-4">
                  Price: ${product.price}
                </p>
                <p className="text-gray-700 text-base mb-4">
                  Quantity: {product.quantity}
                </p>
              </div>
              <div className="flex justify-center">
                <Link
                  to={`/products/${product._id}`}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
                >
                  View Product
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
