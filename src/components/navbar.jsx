import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import useCart from "../hooks/useCart";

const Navbar = () => {
    const { items } = useCart();
  //hidden when scrolling 
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const navbar = document.getElementById("navbar");
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        navbar.style.transform = "translateY(-100%)"; //scroll down -> hide
      } else {
        navbar.style.transform = "translateY(0)"; // scroll up-> show
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //////

  //tailwind class helper
  const linkBase =
    "text-gray-600 sm:text-lg lg:text-2xl hover:text-gray-800 transition-colors";
  const activeLink = "font-semibold text-blue-600";

  return (
    <nav
      id="navbar"
      className="fixed z-50 top-0 left-0 right-0 bg-white shadow-md p-4 transition-transform duration-300"
    >
      <div className="container mx-auto flex justify-between flex-wrap items-center">
        {/*apple logo */}
        <img
          src="/assets/appleLogo.png"
          alt="apple logo"
          width="90"
        />

        {/*links */}
        <ul className="flex flex-wrap space-x-4 md:space-x-8 items-center">
          <li className="px-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeLink : ""}`
              }
              end 
            >
              Home
            </NavLink>
          </li>

          <li className="px-2">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeLink : ""}`
              }
            >
              Products
            </NavLink>
          </li>

          <li className="px-2">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeLink : ""}`
              }
            >
              About
            </NavLink>
          </li>

          <li className="px-2">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeLink : ""}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/*cart*/}
        <div className="flex flex-wrap items-center space-x-4 mt-4 md:mt-0">
          <NavLink
            to="/contact"
            className="px-4 py-2 bg-gray-900 text-lg text-white rounded-full hover:bg-blue-600"
          >
            Contact Us
          </NavLink>

          <div
            className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300"
          ><NavLink to="/cart" className="relative flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
              width="48"
              height="48"
            >
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm0 2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.29-.25.63-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25L8 13h8.55c.75 0 1.41-.41 1.75-1.03l3.24-5.86c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 2z"/>
            </svg>
            {items.length > 0 && (
    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
      {items.length}
    </span>
  )}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
