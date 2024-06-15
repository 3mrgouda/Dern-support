import React from "react";
import Printer from "../assets/products/printers/Canon MG2570S Multi-function Color Inkjet Printer (Black, Ink Cartridge) 1.webp";
import computer from "../assets/products/TV/SAMSUNG Series 8 123 cm (49 inch) Ultra HD (4K) LED Smart Tizen TV (49NU8000) 1.webp";
import wifi from "../assets/products/airpodes/boAt Airdopes 192 2.webp";
const dernSupportProducts = [
  {
    id: 101,
    name: "Dern-Pro Workstation",
    price: 1200.0,
    quantity: 5,
    description:
      "A powerful workstation optimized for business environments and complex tasks.",
    alt: "dern-pro-workstation.png",
    src: computer,
  },
  {
    id: 102,
    name: "Dern-Print Pro 4000",
    price: 300.0,
    quantity: 10,
    description:
      "Reliable and fast printer suitable for high-volume business printing needs.",
    alt: "dern-print-pro-4000.png",
    src: Printer,
  },
  {
    id: 103,
    name: "Dern-WiFi Mesh System",
    price: 150.0,
    quantity: 15,
    description:
      "A scalable Wi-Fi solution providing seamless coverage for business premises.",
    alt: "dern-wifi-mesh-system.png",
    src: wifi,
  },
  // {
  //   id: 104,
  //   name: "Dern-Secure Firewall",
  //   price: 250.0,
  //   quantity: 8,
  //   description:
  //     "Enterprise-grade firewall to protect business networks from cyber threats.",
  //   alt: "dern-secure-firewall.png",
  //   src: productImage,
  // },
  // {
  //   id: 105,
  //   name: "Dern-Office Laptop",
  //   price: 800.0,
  //   quantity: 12,
  //   description:
  //     "A versatile laptop designed for mobility and productivity in the office or on the go.",
  //   alt: "dern-office-laptop.png",
  //   src: productImage,
  // },
];

export default function Products() {
  return (
    <div className="container mx-auto px-4 my-28">
      <h1 className="text-4xl font-bold text-center mb-12">
        Featured
        <span className="text-red-600 border-b-2 border-black">Products</span>
      </h1>
      <div className="cards  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center w-full animate-marquee">
        {dernSupportProducts.map((product) => (
          <div
            key={product.id}
            className="product-card max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-500 hover:shadow-2xl w-full"
          >
            <img
              className="w-full h-64 object-cover transform transition duration-500 hover:scale-105 hover:cursor-pointer"
              src={product.src}
              alt={product.alt}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">
                {product.name.substring(0, 20)}
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
                <a
                  href={product.link}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
                >
                  View Product
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
