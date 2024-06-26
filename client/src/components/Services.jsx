import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/services`
        );
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    }
    fetchServices();
  }, []);

  const latestServices = services.slice(-3).reverse();

  return (
    <div id="services" className="container mx-auto px-4 my-28">
      <h1 className="text-4xl font-bold text-center mb-12">
        Featured
        <span className="text-red-600 border-b-2 border-black">Services</span>
      </h1>
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full">
        {latestServices.map((service) => (
          <Link
            to={`/services/${service._id}`}
            key={service._id}
            className="service-card max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-500 hover:scale-105 hover:shadow-2xl w-full"
          >
            <img
              className="w-full h-64 object-contain transform transition duration-500 hover:opacity-75 hover:cursor-pointer"
              src={service.img}
              alt={service.name}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">
                {service.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
