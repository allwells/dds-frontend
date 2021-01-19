import React from "react";
import "./Footer.css";

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
                <a
                  className="facebook social-handle"
                  target="_blank"
                  href="#facebook.com"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className="twitter social-handle"
                  target="_blank"
                  href="#twitter.com"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="instagram social-handle"
                  target="_blank"
                  href="#instagram.com"
                >
                  Instagram
                </a>
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
                <a className="services-page page-link" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="about-page page-link" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="contact-page page-link" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <a className="privacy-page page-link" href="#privacy-policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="terms-page page-link" href="#terms-of-service">
                  Terms of Service
                </a>
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
