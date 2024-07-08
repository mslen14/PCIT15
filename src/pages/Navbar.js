import { Outlet } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHome,
  faLaptopCode,
  faBriefcase,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            <h1>Portfolio</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ms-2 mb-lg-0">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  <h4>
                    <FontAwesomeIcon className="me-1" icon={faHome} />
                    Home
                  </h4>
                </a>
              </li>
              <li className="nav-item">
                <a href="/About" className="nav-link">
                  <h4>
                    <FontAwesomeIcon className="me-1" icon={faUser} />
                    About
                  </h4>
                </a>
              </li>
              <li className="nav-item">
                <a href="/Portfolio" className="nav-link">
                  <h4>
                    <FontAwesomeIcon className="me-1" icon={faLaptopCode} />
                    Portfolio
                  </h4>
                </a>
              </li>
              <li className="nav-item">
                <a href="/Experience" className="nav-link">
                  <h4>
                    <FontAwesomeIcon className="me-1" icon={faBriefcase} />
                    Experiences
                  </h4>
                </a>
              </li>
              <li className="nav-item">
                <a href="/Contact" className="nav-link">
                  <h4>
                    <FontAwesomeIcon className="me-1" icon={faComment} />
                    Contact
                  </h4>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;
