import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer-bg">
        <div className="footer-content">
          <div className="about-section">
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit, vel nobis amet consectetur adipisicing
              perspiciatis elit impedit.
            </p>
            <ul className="social-media">
              <li>
                <Link
                  className="facebook social-handle"
                  target="_blank"
                  to="https://facebook.com"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  className="twitter social-handle"
                  target="_blank"
                  to="https://twitter.com"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  className="instagram social-handle"
                  target="_blank"
                  to="https://instagram.com"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          <div className="contact-section">
            <h2>Contact</h2>
            <p>
              Lorem ipsum dolor sit, vel nobis amet consectetur adipisicing
              perspiciatis elit impedit.
            </p>
            <p>Tel.:+234 704 567 8910</p>
            <p>Email: info@drugdistribution.com</p>
          </div>
          <div className="pages-section">
            <h2>Pages</h2>
            <ul className="pages">
              <li>
                <Link className="services-page page-link" to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="about-page page-link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="contact-page page-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="privacy-page page-link" to="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="terms-page page-link" to="/terms-of-service">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <p>Copyright Drug Distribution System &#169; 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
