import React from "react";
import "./TraceDrug.css";
import DashboardAppBar from "../Components/DashboardAppBar/DashboardAppBar";
import DashboardFooter from "../Components/DashboardFooter/DashboardFooter";
import { Link } from "react-router-dom";

const InputField = ({ placeholder, type, fieldName, className, fieldId }) => {
  return (
    <div className="inputs">
      <input
        placeholder={placeholder}
        type={type}
        name={fieldName}
        className={className}
        id={fieldId}
      />
    </div>
  );
};

const Button = ({ divName, className, type, value }) => {
  return (
    <div className={divName}>
      <button className={className} type={type}>
        {value}
      </button>
    </div>
  );
};

const TraceDrugForm = () => {
  return (
    <form className="tracedrug-form" method="post" action="#">
      <div className="tracedrug-form-heading">
        <h1>Trace Drug</h1>
      </div>
      <div className="input-field">
        <InputField
          placeholder="Serial Number"
          type="text"
          fieldName="serial"
          className="serial field"
          fieldId="serial"
        />
        <Button
          divName="submit-btn"
          className="submit"
          type="submit"
          value="Trace"
        />
      </div>
    </form>
  );
};

const TraceDrugSideBar = () => {
  return (
    <div className="tracedrug-sidebar">
      <Link className="links" to="/dashboard">
        <div className="link-container">Dashboard</div>
      </Link>
      <Link className="links" to="/dashboard/add-drug">
        <div className="link-container">Add Drug</div>
      </Link>
      <Link className="links" to="/dashboard/distribution">
        <div className="link-container">Distribution</div>
      </Link>
      {/* <Link className="links" to="/add-user">
        <div className="link-container">Add User</div>
      </Link> */}
      <Link className="links" to="/dashboard/trace">
        <div className="link-container active">Trace</div>
      </Link>
    </div>
  );
};

const TraceDrugMainContent = () => {
  return (
    <div className="tracedrug-main">
      <TraceDrugForm />
    </div>
  );
};

const TraceDrugMainLayout = () => {
  return (
    <div className="tracedrug-main-layout">
      <div className="tracedrug-main-layout02">
        <TraceDrugSideBar />
        <TraceDrugMainContent />
      </div>
    </div>
  );
};

const TraceDrug = () => {
  return (
    <div className="tracedrug-layout">
      <div className="tracedrug-main02">
        <DashboardAppBar />
        <TraceDrugMainLayout />
        <DashboardFooter />
      </div>
    </div>
  );
};

export default TraceDrug;
