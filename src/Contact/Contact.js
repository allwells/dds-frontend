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

const OpenHours = () => {
  return (
    <div className="hour-layout">
      <div className="hour-border">
        <div className="headings">
          <h3>COME ON IN</h3>
          <h1>WE'ER OPEN</h1>
        </div>
        <div className="hours">
          <div className="weekday">
            <p>Sunday</p>
            <p>Closed</p>
          </div>
          <div className="weekday-line"></div>
          <div className="weekday">
            <p>Monday</p>
            <p>7:00 AM to 8:00 PM</p>
          </div>
          <div className="weekday-line"></div>
          <div className="weekday">
            <p>Tuesday</p>
            <p>7:00 AM to 8:00 PM</p>
          </div>
          <div className="weekday-line"></div>
          <div className="weekday">
            <p>Wednesday</p>
            <p>7:00 AM to 8:00 PM</p>
          </div>
          <div className="weekday-line"></div>
          <div className="weekday">
            <p>Thursday</p>
            <p>7:00 AM to 8:00 PM</p>
          </div>
          <div className="weekday-line"></div>
          <div className="weekday">
            <p>Friday</p>
            <p>7:00 AM to 8:00 PM</p>
          </div>
          <div className="weekday-line"></div>
          <div className="weekday">
            <p>Saturday</p>
            <p>Closed</p>
          </div>
          <div className="weekday-line"></div>
        </div>
      </div>
    </div>
  );
};

const ContactContent = () => {
  return (
    <div>
      <div className="form-bg">
        <OpenHours />
        <form className="contact-form" action="#contact-us-form" method="post">
          <div className="leave-a-message">
            <h1>Leave a Message</h1>
            <div className="leave-a-message-line"> </div>
          </div>
          <div className="input-fields-container">
            <div className="input-fields">
              <div className="name-container textfields">
                <label htmlFor="fullname">Name</label>
                <input
                  placeholder="eg.John Doe"
                  className="fullname inputs"
                  name="fullname"
                  id="fullname"
                />
              </div>
              <div className="company-container textfields">
                <label htmlFor="company">Company</label>
                <input
                  placeholder="eg.Harrylands Clinic"
                  className="company inputs"
                  name="company"
                  id="company"
                />
              </div>
              <div className="email-container textfields">
                <label htmlFor="email">Email</label>
                <input
                  placeholder="eg.johndoe@gmail.com"
                  className="email inputs"
                  name="email"
                  id="email"
                />
              </div>
            </div>
            <div className="message-container textfields">
              <label htmlFor="message">Message</label>
              <textarea
                placeholder="Leave a message..."
                className="message"
                name="message"
                id="message"
              ></textarea>
            </div>
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
