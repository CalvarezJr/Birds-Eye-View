
import { Link } from "react-router-dom";
import "./index.css";

function Header() {
  return (
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
<nav className="bg-blue-900 pb-1 border-b">
  <div className="container mx-auto flex items-center justify-between px-4 py-3">
    {/* Navbar Brand */}
    <h1 className="text-3xl lg:text-4xl text-white font-bold">Birds Eye View</h1>
    
    {/* Mobile Menu Button */}
    <button
      className="block lg:hidden p-2 text-gray-200 hover:text-white focus:outline-none"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <div className="space-y-1">
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </div>
    </button>

    {/* Navbar Links */}
    <div className="hidden lg:flex items-center space-x-6" id="navbarNavDropdown">
      <ul className="flex items-center space-x-6 text-white">
        <li>
          <a
            href="/"
            className="text-lg font-medium bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            About Me
          </a>
        </li>
        <li className="text-xl font-bold">|</li>
        <li>
          <a
            href="/portfolio"
            className="text-lg font-medium bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Portfolio
          </a>
        </li>
        <li className="text-xl font-bold">|</li>
        <li>
          <a
            href="/contact"
            className="text-lg font-medium bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Contact
          </a>
        </li>
        <li className="text-xl font-bold">|</li>
        <li>
          <button
            type="button"
            className="text-lg font-medium bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Get A Free Quote Today!
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Header;
