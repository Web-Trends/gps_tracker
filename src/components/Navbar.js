// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Styles.css"; // Import CSS file for styling
import logo from "../logo.svg"; // Import your logo image

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-right">
        <ul className="navbar-nav">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
