import React from "react";
import "./Contact.css";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

const ContactHeader = () => {
  return (
    <div className="contact-header-padding">
      <div className="contact-header-bg">
        <div className="contact-header-bg-tint">
          <h1>Contact</h1>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <NavBar />
      <ContactHeader />
      <Footer />
    </div>
  );
};

export default Contact;
