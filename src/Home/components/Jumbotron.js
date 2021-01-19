import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => {
  return (
    <div>
      <div className="bg-img">
        <div className="bg-tint">
          <div className="jumbo-text-container">
            <h1>Track the distribution of</h1>
            <h1>drugs today</h1>
            <p>Systematically track and monitor the distribution</p>
            <p>of drugs in Nigeria.</p>
          </div>
          <div className="get-started-container">
            <a className="get-started-link" href="#signup">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
