import React from "react";
import computer from "../assets/services/computer.png";
import printer from "../assets/services/printer.png";
import wifi from "../assets/services/wifi.png";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Computer Support",
      src: computer,
    },
    {
      id: 2,
      title: "Printer Support",
      src: printer,
    },
    {
      id: 3,
      title: "Wifi Support",
      src: wifi,
    },
  ];
  return (
    <div id="services" className="container mx-auto px-4 my-28">
      <h1 className="text-4xl font-bold text-center mb-12">
        Our{" "}
        <span className="text-red-600 border-b-2 border-black">Services</span>
      </h1>
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full">
        {services.map((service) => (
          <div className="service-card max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-500 hover:scale-105 hover:shadow-2xl w-full">
            <img
              className="w-full h-64 object-contain transform transition duration-500 hover:opacity-75 hover:cursor-pointer"
              src={service.src}
              alt={service.title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">
                {service.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
