import React, { useState } from "react";
import "./index.css";
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-sky-blue to-cloud-white bg-opacity-70">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-4xl font-extrabold text-jet-black transition duration-300 animate-pulse">
          <img className="logo" src="./img/FullLogo_Transparent.png" />
        </h1>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-jet-black text-xl md:text-2xl lg:text-3xl hover:text-yellow-ochre transition duration-300 hover:scale-125"
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className="text-jet-black text-xl md:text-2xl lg:text-3xl hover:text-yellow-ochre hover:font-Merienda transition duration-300 hover:scale-125"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="text-jet-black text-xl md:text-2xl lg:text-3xl hover:text-yellow-ochre transition duration-300 hover:scale-125"
          >
            Contact
          </Link>
          <Link 
            to="/contact"
            className="text-xl md:text-2xl lg:text-3xl italic text-jet-black px-4 transition duration-300 transform hover:scale-125 hover:text-yellow-ochre">
            Get A Free Quote Today!
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-jet-black hover:text-yellow-ochre transition duration-300 px-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="text-jet-black p-4 space-y-4 font-medium md:hidden animate-fade-in">
          <Link
            to="/"
            className="block hover:text-yellow-ochre transition duration-300 hover:scale-90 hover:text-xl"
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className="block hover:text-yellow-ochre transition duration-300 hover:scale-90 hover:text-xl"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="block hover:text-yellow-ochre transition duration-300 hover:scale-90 hover:text-xl"
          >
            Contact
          </Link>
          <Link
            to="/contact"
            className="block italic transition duration-300 transform hover:scale-90 hover:text-yellow-ochre">
            Get A Free Quote Today!
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
