
import { Link } from "react-router-dom";
import "./index.css";

function Header() {
  return (
    <nav class="navbar bg-body-secondary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Birds Eye View</a>
    <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link link-dark" aria-current="page" href="/">About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link link-dark" href="/portfolio">Portfolio</a>
  </li>
  <li class="nav-item">
    <a class="nav-link link-dark btn-primary-outline btn" href="/contact">Contact</a>
  </li>
  </ul>
  </div>
</nav>
  );
}

export default Header;
