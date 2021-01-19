import React from "react";
import "./Services.css";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

const ServicesHeader = () => {
  return (
    <div className="services-header-padding">
      <div className="services-header-bg">
        <div className="services-header-bg-tint">
          <h1>Services</h1>
        </div>
      </div>
    </div>
  );
};

const ServicesContent = () => {
  return (
    <div>
      <div className="services-content">
        <div className="first-content container">
          <div className="first-content-image content-image"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sapiente
            autem iure veniam distinctio laborum magni accusantium pariatur
            nihil nobis itaque, sunt deleniti at, voluptates quasi magnam a
            nulla amet. Lorem, ipsum dolor sit officia amet consectetur
            adipisicing elit. Illum repudiandae nobis quas ab enim consequatur
            eligendi? Consequuntur laboriosam soluta recusandae, et, veniam quia
            inventore, obcaecati impedit aspernatur a assumenda officia.
          </p>
        </div>
        <div className="second-content container">
          <div className="second-content-image content-image"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sapiente
            autem iure veniam distinctio laborum magni accusantium pariatur
            nihil nobis itaque, sunt deleniti at, voluptates quasi magnam a
            nulla amet. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Illum repudiandae nobis quas ab enim consequatur eligendi?
            Consequuntur laboriosam soluta recusandae, et, veniam quia
            inventore, obcaecati impedit aspernatur a assumenda officia.
          </p>
        </div>
        <div className="third-content container">
          <div className="third-content-image content-image"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sapiente
            autem iure veniam distinctio laborum magni accusantium pariatur
            nihil nobis itaque, sunt deleniti at, voluptates quasi magnam a
            nulla amet. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Illum repudiandae nobis quas ab enim consequatur eligendi?
            Consequuntur laboriosam soluta recusandae, et, veniam quia
            inventore, obcaecati impedit aspernatur a assumenda officia.
          </p>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div>
      <NavBar />
      <ServicesHeader />
      <ServicesContent />
      <Footer />
    </div>
  );
};

export default Services;
