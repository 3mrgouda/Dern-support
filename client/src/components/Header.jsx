import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { GrSearch } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/auth";
export default function Header() {
  const [open, setOpen] = useState(false);
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
  const { user, logoutUser } = useAuth();

  return (
    <header className="">
      <nav
        className={`max-[350px]:gap-0 flex items-center justify-around py-4 gap-10 md:gap-0 max-[350px]:h-16 h-20 bg-white fixed top-0 border-b-2 border-black  z-50 w-full`}
      >
        <div className="logo flex items-center gap-3 sm:gap-10">
          <button
            className="max-[350px]:text-3xl text-4xl lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <MdClose /> : <MdMenu />}
          </button>
          <Link className="max-[350px]:text-xl text-2xl lg:text-4xl" to={"/"}>
            <span className="font-bold text-red-500">Dern</span>Support
          </Link>
        </div>

        <div className="linksForComputer hidden lg:flex">
          <ul className="flex gap-5 text-2xl">
            {links.map((link) => (
              <li key={link.id} className="cursor-pointer hover:text-red-500">
                <Link to={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[80%] hidden md:flex items-center mx-auto  justify-between max-w-sm border rounded-full focus-within:shadow pl-2 m-2">
            <input
              type="text"
              placeholder="search..."
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
            <>
              <Link
                to="/login"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </nav>

      <nav
        className={`Navigation duration-300 ${
          !open ? "hidden" : "block"
        } bg-white border-b-2 border-black  -mt-8   lg:hidden fixed z-40 w-full`}
      >
        <div className="w-[80%] flex items-center mx-auto md:hidden  justify-between max-w-sm border rounded-full focus-within:shadow pl-2 m-2">
          <input
            type="text"
            placeholder="search..."
            className="w-full outline-none"
          />
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
            <GrSearch />
          </div>
        </div>
        <div className="linksForMobile">
          <ul className="flex flex-col gap-5 lg:items-center ">
            {links.map((item) => (
              <li key={item.id} className="text-center hover:bg-red-600">
                <a
                  href={item.url}
                  className="text-main focus:border-b-2  duration-150 text-nowrap border-b-secondary"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
