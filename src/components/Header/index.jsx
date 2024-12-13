import React, { useState } from "react";
import "./index.css";

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
          <a
            href="/"
            className="text-jet-black text-xl md:text-2xl lg:text-3xl hover:text-yellow-ochre transition duration-300 hover:scale-125"
          >
            About
          </a>
          <a
            href="/portfolio"
            className="text-jet-black text-xl md:text-2xl lg:text-3xl hover:text-yellow-ochre hover:font-Merienda transition duration-300 hover:scale-125"
          >
            Portfolio
          </a>
          <a
            href="/contact"
            className="text-jet-black text-xl md:text-2xl lg:text-3xl hover:text-yellow-ochre transition duration-300 hover:scale-125"
          >
            Contact
          </a>
          <a 
            href="/quote"
            className="text-xl md:text-2xl lg:text-3xl italic text-jet-black px-4 transition duration-300 transform hover:scale-125 hover:text-yellow-ochre">
            Get A Free Quote Today!
          </a>
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
          <a
            href="/"
            className="block hover:text-yellow-ochre transition duration-300 hover:scale-90 hover:text-xl"
          >
            About
          </a>
          <a
            href="/portfolio"
            className="block hover:text-yellow-ochre transition duration-300 hover:scale-90 hover:text-xl"
          >
            Portfolio
          </a>
          <a
            href="/contact"
            className="block hover:text-yellow-ochre transition duration-300 hover:scale-90 hover:text-xl"
          >
            Contact
          </a>
          <a 
            href="/quote"
            className="block italic transition duration-300 transform hover:scale-90 hover:text-yellow-ochre">
            Get A Free Quote Today!
          </a>
        </div>
      )}
    </header>
    /* <nav className="navbar d-blue pb-1 navbar-expand-lg border-bottom" data-bs-theme="light">
<div className="container-fluid">
  <h1 className="ms-3 display-2">Birds Eye View</h1>
  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
  <ul className="navbar-nav d-flex flex-row align-items-center justify-content-evenly list-unstyled flex-wrap">
    <li className="nav-item">
      <a className="fs-2 nav-item btn btn-primary mx-4 nav-link" href="/">
        About Me
      </a>
    </li>
    <li className="nav-item fs-1">|</li>
    <li className="nav-item">
      <a className="fs-2 nav-item btn btn-primary mx-4 nav-link" href="/portfolio">
        Portfolio
      </a>
    </li>
    <li className="nav-item fs-1">|</li>
    <li className="nav-item">
      <a className="fs-2 nav-item btn btn-primary mx-4 nav-link" href="/contact">
        Contact
      </a>
    </li>
    <li className="nav-item fs-1">|</li>
    <li>
    <div className="col-12">
                <button type="button" className="btn btn-primary mx-4 nav-link fs-2">
                    Get A Free Quote Today!
                </button>
            </div>
    </li>
  </ul>
</div>
</div>
</nav> */
    /* <nav className="bg-gradient-to-b from-sky-blue to-cloud-white pb-1 border-b">
  <div className="container mx-auto flex items-center justify-between px-4 py-3">

    <h1 className="text-2xl md:text-3xl lg:text-4xl text-jet-black font-bold">Birds Eye View</h1>


    <div className="hidden lg:flex items-center space-x-6">
      <ul className="flex items-center space-x-6 text-white">
        <li>
          <a
            href="/"
            className="text-lg md:text-xl lg:text-2xl font-medium text-white"
          >
            <button className="hover:text-yellow-ochre px-4 py-2 transition duration-300 transform hover:scale-125">About</button>
          </a>
        </li>
        <li>
          <a
            href="/portfolio"
            className="text-lg md:text-xl lg:text-2xl font-medium text-white5"
          >
            <button className="hover:text-yellow-ochre px-4 py-2 transition duration-300 transform hover:scale-125">Portfolio</button>
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="text-lg md:text-xl lg:text-2xl font-medium text-white"
          >
            <button className="hover:text-yellow-ochre px-4 py-2 transition duration-300 transform hover:scale-125">Contact</button>
          </a>
        </li>
        <li>
          <button
            className="text-lg md:text-xl lg:text-2xl font-medium text-white px-4 py-2 transition duration-300 transform hover:scale-125 hover:text-yellow-ochre"
          >
            Get A Free Quote Today!
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav> */
  );
}

export default Header;
