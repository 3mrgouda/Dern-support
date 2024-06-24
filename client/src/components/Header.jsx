import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { GrSearch } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/auth";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Products", url: "/products" },
    { id: 3, title: "Articles", url: "/articles" },
    { id: 4, title: "Services", url: "/services" },
  ];
  const { user, logoutUser } = useAuth();

  return (
    <header>
      <nav className="flex items-center justify-around py-4 bg-white fixed top-0 border-b-2 border-black z-50 w-full">
        <div className="flex items-center gap-3 sm:gap-10">
          <button
            className="text-4xl lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <MdClose /> : <MdMenu />}
          </button>
          <Link className="text-2xl lg:text-4xl font-bold text-red-500" to="/">
            DernSupport
          </Link>
        </div>

        <div className="hidden lg:flex">
          <ul className="flex gap-5 text-2xl">
            {links.map((link) => (
              <li key={link.id} className="cursor-pointer hover:text-red-500">
                <Link to={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center mx-auto justify-between max-w-sm border rounded-full focus-within:shadow pl-2 m-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full outline-none"
            />
            <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
              <GrSearch />
            </div>
          </div>
          {user ? (
            <button
              onClick={logoutUser}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </Link>
          )}
        </div>
      </nav>

      <nav
        className={`fixed z-40 w-full bg-white border-b-2 border-black lg:hidden transition-transform duration-300 ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center mx-auto justify-between max-w-sm border rounded-full focus-within:shadow pl-2 pb-2 m-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full outline-none"
          />
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
            <GrSearch />
          </div>
        </div>
        <ul className="flex flex-col gap-5 text-center">
          {links.map((link) => (
            <li key={link.id} className="hover:bg-red-600">
              <Link
                to={link.url}
                className="text-main focus:border-b-2 duration-150"
                onClick={() => setOpen(false)}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
