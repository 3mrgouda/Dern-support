import React from "react";
import { FaCopyright, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
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
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Products",
      url: "/products",
    },
    {
      id: 3,
      title: "Articles",
      url: "/articles",
    },
    {
      id: 4,
      title: "Services",
      url: "/services",
    },
  ];
  const articles = [
    {
      id: 1,
      title: "Computer",
      url: "/articles/6677d63eb79d74859d67cbfc",
    },
    {
      id: 2,
      title: "Printers",
      url: "/articles/6677d5d2b79d74859d67cbfa",
    },
    {
      id: 3,
      title: "Wifi",
      url: "/articles/6677d69cb79d74859d67cbfe",
    },
  ];
  return (
    <footer className="border-t-2 border-black mt-10">
      <div className="container flex justify-around items-center px-6 py-10 mx-auto">
        <div data-aos="fade-up">
          <p className="font-semibold text-black">Quick Link</p>
          <div className="flex flex-col items-start mt-2 space-y-2">
            {links.map((link) => (
              <Link
                key={link.id}
                to={link.url}
                className="transition-colors duration-300 text-gray-700 dark:hover:text-red-400 hover:underline hover:cursor-pointer hover:text-black"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div data-aos="fade-up">
          <p className="font-semibold text-black">Need Help</p>
          <div className="flex flex-col items-start mt-5 space-y-2">
            {articles.map((article) => (
              <Link
                to={article.url}
                key={article.id}
                className="group transition-colors duration-300 text-gray-700 hover:underline hover:cursor-pointer hover:text-black"
              >
                Read about <span className="text-red-600 group-hover:text-black  hover:text-black">{article.title}</span> problems
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-4 hover:cursor-pointer">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/amrmohamedgouda/"
          >
            <FaLinkedin className="w-10 h-10 text-black" />
          </a>
          <a target="_blank" href="https://github.com/3mrgouda">
            <FaGithub className="w-10 h-10 text-black" />
          </a>
        </div>
        <p className="font-sans py-8 text-start md:text-center md:text-lg md:p-4 text-black">
          <FaCopyright className="inline-block" /> 2023{" "}
          <a
            className="border-b border-black md:text-xl"
            target="_blank"
            href="https://www.linkedin.com/in/amrmohamedgouda/"
          >
            <span className="font-bold text-red-600">Dern</span>
            Support
          </a>{" "}
          Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
