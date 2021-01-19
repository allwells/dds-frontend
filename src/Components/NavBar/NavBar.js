import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="nav-bar">
        <div className="logo">
          <Link className="logo-txt" to="/">
            DDS
          </Link>
        </div>
        <div className="nav-items">
          <li>
            <Link className="nav-links active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/services">
              Service
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/contact">
              Contact
            </Link>
          </li>
        </div>
        <div className="login-signup">
          <div className="login-btn-container">
            <Link className="login-link" to="/login">
              Login
            </Link>
          </div>
          <div className="signup-btn-container">
            <Link className="signup-link" to="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
