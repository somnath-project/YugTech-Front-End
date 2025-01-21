import React, { useState } from 'react';
import ScrollProgress from "@/components/ui/scroll-progress";
import Logo from "../assets/NextGen_Institute_Transparent.png"
import Logo1 from "../assets/Logo1.png"

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 text-white py-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
        <div className="flex items-center space-x-4">
        {/* <i className="fa-solid fa-building-columns text-3xl text-white"></i> */}
          <img src={Logo1} alt="Institute Logo" className="w-12 h-12 rounded-full hidden sm:block" />
          <h1 className="text-2xl font-bold">NextGen Institute</h1>
        </div>
        <div className="flex sm:hidden">
          <button
            className="text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            onClick={toggleNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav
          className={`w-full sm:w-auto flex-col sm:flex-row sm:flex sm:space-x-4 mt-4 sm:mt-0 ${
            isNavOpen ? 'flex' : 'hidden'
          }`}
        >
          <a
            href="#"
            className="block py-2 px-4 text-sm sm:text-base hover:text-gray-300 transition duration-300 text-center"
          >
            Home
          </a>
          <a
            href="#courses"
            className="block py-2 px-4 text-sm sm:text-base hover:text-gray-300 transition duration-300 text-center"
          >
            Courses
          </a>
          <a
            href="#contact"
            className="block py-2 px-4 text-sm sm:text-base hover:text-gray-300 transition duration-300 text-center"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Scroll Progress Component */}
      <ScrollProgress className="top-[64px] sm:top-[77px]" />
    </header>
  );
};

export default Header;
