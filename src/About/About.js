import React from "react";
import "./About.css";
import NavBar from "../Components/NavBar/NavBar";

const AboutHeader = () => {
  return (
    <div>
      <div className="about-header-bg">
        <div className="about-header-bg-tint">
          <h1>About</h1>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <NavBar />
      <AboutHeader />
    </div>
  );
};

export default About;
