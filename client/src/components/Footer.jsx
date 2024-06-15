import React from "react";
import { FaCopyright, FaGithub, FaLinkedin } from "react-icons/fa";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;

    Swal.fire({
      icon: "success",
      title: "Subscription Successful!",
      text: `Thank you for subscribing with ${email}`,
    });
  };

  return (
    <footer className="border-t-2 border-black mt-10">
      <div className="container px-6 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div data-aos="fade-up" className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight xl:text-2xl">
              Subscribe to our newsletter to get updates.
            </h1>
            <form
              className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row"
              onSubmit={handleSubscribe}
            >
              <input
                id="email"
                type="email"
                className="px-4 py-2 border-black border focus:border-red-500 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-red-300"
                placeholder="Email Address"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-black transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-red-500 hover:bg-red-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div data-aos="fade-up">
            <p className="font-semibold text-black">Quick Link</p>
            <div className="flex flex-col items-start mt-2 space-y-2">
              <p className="transition-colors duration-300 text-gray-700 dark:hover:text-red-400 hover:underline hover:cursor-pointer hover:text-black">
                Home
              </p>
              <p className="transition-colors duration-300 text-gray-700 dark:hover:text-red-400 hover:underline hover:cursor-pointer hover:text-black">
                Who We Are
              </p>
              <p className="transition-colors duration-300 text-gray-700 dark:hover:text-red-400 hover:underline hover:cursor-pointer hover:text-black">
                Our Philosophy
              </p>
            </div>
          </div>
          <div data-aos="fade-up">
            <p className="font-semibold text-black">Industries</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="transition-colors duration-300 text-gray-700 hover:underline hover:cursor-pointer hover:text-black">
                Retail &amp; E-Commerce
              </p>
              <p className="transition-colors duration-300 text-gray-700 hover:underline hover:cursor-pointer hover:text-black">
                Information Technology
              </p>
              <p className="transition-colors duration-300 text-gray-700 hover:underline hover:cursor-pointer hover:text-black">
                Finance &amp; Insurance
              </p>
            </div>
          </div>
        </div>
        <hr className="my-6 md:my-8 dark:border-gray-700 h-2" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex gap-4 hover:cursor-pointer">
            <FaGithub className="w-10 h-10 text-black" />
            <FaLinkedin className="w-10 h-10 text-black" />
          </div>
          <p className="font-sans py-8 text-start md:text-center md:text-lg md:p-4 text-black">
            <FaCopyright className="inline-block" /> 2023{" "}
            <a className="border-b border-black md:text-xl" href="#">
              <span className="font-bold text-red-600">Dern</span>
              Support
            </a>{" "}
            Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
