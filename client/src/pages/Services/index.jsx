import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/services`
        );
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto px-4 my-28">
      <h1 className="text-4xl font-bold text-center mb-12">
        Our{" "}
        <span className="text-red-600 border-b-2 border-black">Services</span>
      </h1>
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full">
        {services.map((service) => (
          <div
            key={service._id}
            className="news-card max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-500 hover:shadow-2xl w-full text-center pb-4"
          >
            <img
              className="max-w-full h-64 object-contain transform transition duration-500 hover:scale-105 hover:cursor-pointer"
              src={service.img}
              alt={service.name}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">
                {service.name}
              </div>
              <p className="text-gray-700 text-base  text-left">
                {service.description.slice(0, 180)} . . .
              </p>
            </div>
            <Link
              to={`/services/${service._id}`}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
