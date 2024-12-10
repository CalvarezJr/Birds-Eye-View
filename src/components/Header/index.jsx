
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
<nav className="bg-gradient-to-b from-sky-blue to-cloud-white pb-1 border-b">
  <div className="container mx-auto flex items-center justify-between px-4 py-3">
    {/* Navbar Brand */}
    <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">Birds Eye View</h1>

    {/* Navbar Links */}
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
</nav>


  );
}

export default Header;
