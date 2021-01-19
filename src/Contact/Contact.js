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

const ContactContent = () => {
  return (
    <div>
      <div className="form-bg">
        <div className="working-hours-container">
          <div className="working-hours">
            <p></p>
          </div>
        </div>
        <form className="contact-form" action="#contact-us-form" method="post">
          <div className="input-fields-container">
            <div className="name-container">
              <label htmlFor="fullname">Name</label>
              <input
                placeholder="eg. John Doe"
                className="fullname"
                name="fullname"
                id="fullname"
              />
            </div>
            <div className="company-container">
              <label htmlFor="company">Company</label>
              <input
                placeholder="eg. Harrylands Clinic"
                className="company"
                name="company"
                id="company"
              />
            </div>
            <div className="email-container">
              <label htmlFor="email">Email</label>
              <input
                placeholder="eg. johndoe@gmail.com"
                className="email"
                name="email"
                id="email"
              />
            </div>
          </div>
          <div className="message-container">
            <label htmlFor="message">Message</label>
            <textarea
              placeholder="Leave a message..."
              className="message"
              name="message"
              id="message"
            ></textarea>
          </div>
          <div className="submit-btn">
            <input className="submit" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <NavBar />
      <ContactHeader />
      <ContactContent />
      <Footer />
    </div>
  );
};

export default Contact;
