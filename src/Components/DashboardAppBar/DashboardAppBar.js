import React from "react";
import "./DashboardAppBar.css";
import { Link } from "react-router-dom";

const DashboardAppBar = () => {
  return (
    <nav className="app-bar">
      <div className="logo">
        <Link className="logo-txt" to="/dashboard">
          DDS
        </Link>
      </div>
      <div className="logo logout">
        <Link className="logout-link" to="/login">
          <img src="logout.svg" alt=" " />
        </Link>
      </div>
    </nav>
  );
};

export default DashboardAppBar;
