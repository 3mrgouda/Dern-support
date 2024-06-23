import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading";

export default function ProductByID() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProductById() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        setError("Error fetching product details");
      } finally {
        setLoading(false);
      }
    }
    fetchProductById();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="text-center mt-20 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 my-28">
      <h1 className="text-4xl font-bold text-center mb-12">
        Our{" "}
        <span className="text-red-600 border-b-2 border-black">Products</span>
      </h1>
      <div className="mx-auto flex flex-col md:flex-row justify-center items-center ">
        <div className="w-1/2">
          <img
            className="max-w-full object-contain"
            src={product.img}
            alt={product.name}
          />
        </div>

        <div className="p-6 w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-center">
            {product.name}
          </h2>
          <div className="flex justify-between items-center mb-6 space-y-10">
            <span className="text-2xl font-bold">${product.price}</span>
            <span className="text-xl text-gray-600">
              Quantity: {product.quantity}
            </span>
          </div>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="flex justify-center">
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
