
import { Link } from "react-router-dom";
import "./index.css";

function Header() {
  return (
//     <nav className="navbar bg-body-secondary">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="/">Birds Eye View</a>
//     <ul className="nav justify-content-end">
//   <li className="nav-item">
//     <a className="nav-link link-dark" aria-current="page" href="/">About</a>
//   </li>
//   <li className="nav-item">
//     <a className="nav-link link-dark" href="/portfolio">Portfolio</a>
//   </li>
//   <li className="nav-item">
//     <a className="nav-link link-dark btn-primary-outline btn" href="/contact">Contact</a>
//   </li>
//   </ul>
//   </div>
// </nav>
<nav className="navbar d-blue pb-1 navbar-expand-lg border-bottom" data-bs-theme="light">
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
</nav>
  );
}

export default Header;
