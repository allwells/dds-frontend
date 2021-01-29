import React from "react";
import "./DashboardAppBar.css";
import { Link } from "react-router-dom";

const DashboardAppBar = () => {
  return (
    <nav className="app-bar">
      <div className="logo">
        <Link className="logo-txt" to="/">
          DDS
        </Link>
      </div>
    </nav>
  );
};

export default DashboardAppBar;
