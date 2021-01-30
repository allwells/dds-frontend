import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

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
            <Link className="get-started-link" to="/trace">
              Trace Drug
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <NavBar />
      <Jumbotron />
      <Footer />
    </div>
  );
};

export default Home;
