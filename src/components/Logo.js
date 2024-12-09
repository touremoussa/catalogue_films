import React, { useState } from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-opaque">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
        <img src={`${process.env.PUBLIC_URL}/logo4.png`} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">
                Catégories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/apropos">
                À propos
              </Link>
            </li>
            <li className="nav-item search-item">
              <Link className="nav-link" to="/search">
                <button
                  className="btn btn-outline-light search-btn"
                  type="submit"
                >
                  <i className="fas fa-search"></i>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Logo;