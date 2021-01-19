import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="nav-bar">
        <div className="logo">
          <a className="logo-txt" href="#home">
            DDS
          </a>
        </div>
        <div className="nav-items">
          <li>
            <a className="nav-links active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="nav-links" href="#service">
              Services
            </a>
          </li>
          <li>
            <a className="nav-links" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="nav-links" href="#contact">
              Contact
            </a>
          </li>
        </div>
        <div className="login-signup">
          <div className="login-btn-container">
            <a className="login-link" href="#login">
              Login
            </a>
          </div>
          <div className="signup-btn-container">
            <a className="signup-link" href="#signup">
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
