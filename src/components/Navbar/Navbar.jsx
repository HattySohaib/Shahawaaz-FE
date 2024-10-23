import React, { useState } from "react";
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="navbar">
      <Link className="logo-link" to="/">
        <h1 className="logo">ShahAwaaz.</h1>
      </Link>
      <div className="mobile-nav">
        <div className="menu-btn" onClick={toggleMenu}>
          <img className="menu-open" src={menu} alt="menu" />
          <p className="menu-text">Menu</p>
        </div>
        <div className={`mobile-nav-items ${isMenuOpen ? "open" : ""}`}>
          <button className="menu-btn close-btn" onClick={toggleMenu}>
            <img className="menu-open" src={close} alt="close" />
            <p className="menu-text">Close</p>
          </button>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active" onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                activeClassName="active"
                onClick={toggleMenu}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                activeClassName="active"
                onClick={toggleMenu}
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeClassName="active"
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName="active"
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="desktop-nav">
        <ul className="desktop-nav-list">
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" activeClassName="active">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" activeClassName="active">
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
