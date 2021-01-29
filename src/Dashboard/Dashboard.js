import React from "react";
import DashboardAppBar from "../Components/DashboardAppBar/DashboardAppBar";
import "./Dashboard.css";
import { Link } from "react-router-dom";

const DashboardSideBar = () => {
  return (
    <div className="dashboard-sidebar">
      <Link className="links" to="/dashboard">
        <div className="link-container active">Dashboard</div>
      </Link>
      <Link className="links" to="/add-drug">
        <div className="link-container">Add Drug</div>
      </Link>
      <Link className="links" to="/distribution">
        <div className="link-container">Distribution</div>
      </Link>
      <Link className="links" to="/add-user">
        <div className="link-container">Add User</div>
      </Link>
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
      <div className="dashboard-main-layout02">
        <DashboardSideBar />
        <DashboardMainContent />
      </div>
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
