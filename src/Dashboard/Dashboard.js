import React from "react";
import DashboardAppBar from "../Components/DashboardAppBar/DashboardAppBar";
import "./Dashboard.css";
import { Link } from "react-router-dom";

const DashboardSideBar = () => {
  return (
    <div className="dashboard-sidebar">
      <div className="link-container active">
        <Link className="links" to="#">
          Dashboard
        </Link>
      </div>
      <div className="link-container">
        <Link className="links" to="#">
          Add Drug
        </Link>
      </div>
      <div className="link-container">
        <Link className="links" to="#">
          Distribution
        </Link>
      </div>
      <div className="link-container last-child">
        <Link className="links" to="#">
          Add User
        </Link>
      </div>
    </div>
  );
};

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main">
      <div className="welcome">
        <h1>Welcome Allwell,</h1>
        <h3>what do you want to do today?</h3>
      </div>
    </div>
  );
};

const DashboardMainLayout = () => {
  return (
    <div className="dashboard-main-layout">
      <DashboardSideBar />
      <DashboardMainContent />
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <div className="dashboard-main02">
        <DashboardAppBar />
        <DashboardMainLayout />
      </div>
    </div>
  );
};

export default Dashboard;
