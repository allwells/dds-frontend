import React from "react";
import DashboardAppBar from "../Components/DashboardAppBar/DashboardAppBar";
import "./Dashboard.css";

const DashboardSideBar = () => {
  return <div className="dashboard-sidebar"></div>;
};

const DashboardMainContent = () => {
  return <div className="dashboard-main"></div>;
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
      <DashboardAppBar />
      <DashboardMainLayout />
    </div>
  );
};

export default Dashboard;
