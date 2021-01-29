import React from "react";
import "./DrugDistribution.css";
import DashboardAppBar from "../Components/DashboardAppBar/DashboardAppBar";
import DashboardFooter from "../Components/DashboardFooter/DashboardFooter";
import { Link } from "react-router-dom";

const InputField = ({ label, type, fieldName, className, fieldId }) => {
  return (
    <div className="inputs">
      <label htmlFor={fieldId}>{label}</label>
      <input type={type} name={fieldName} className={className} id={fieldId} />
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

const DistributionForm = () => {
  return (
    <form className="distribution-form" method="post" action="#">
      <div className="dist-form-heading">
        <h1>Distribution</h1>
      </div>
      <div className="input-field">
        <InputField
          label="Serial Number"
          type="text"
          fieldName="serial"
          className="serial field"
          fieldId="serial"
        />
        <InputField
          label="Source"
          type="text"
          fieldName="source"
          className="source field"
          fieldId="source"
        />
        <InputField
          label="Destination"
          type="text"
          fieldName="destination"
          className="destination field"
          fieldId="destination"
        />

        <InputField
          label="Batch"
          type="number"
          fieldName="batch"
          className="batch field"
          fieldId="batch"
        />
        <InputField
          label="Lowest Range"
          type="number"
          fieldName="low_range"
          className="low_range field"
          fieldId="low_range"
        />
        <InputField
          label="Highest Range"
          type="number"
          fieldName="high_range"
          className="high_range field"
          fieldId="high-range"
        />
        <InputField
          label="Departure Date"
          type="date"
          fieldName="departure"
          className="departure field"
          fieldId="departure"
        />
        <InputField
          label="Arrival Date"
          type="date"
          fieldName="arrival"
          className="arrival field"
          fieldId="arrival"
        />
        <InputField
          label="Moved By"
          type="text"
          fieldName="moved"
          className="moved field"
          fieldId="moved"
        />
        <Button
          divName="submit-btn"
          className="submit"
          type="submit"
          value="Submit"
        />
      </div>
    </form>
  );
};

const DistributionSideBar = () => {
  return (
    <div className="distribution-sidebar">
      <Link className="links" to="/dashboard">
        <div className="link-container">Dashboard</div>
      </Link>
      <Link className="links" to="/add-drug">
        <div className="link-container">Add Drug</div>
      </Link>
      <Link className="links" to="/distribution">
        <div className="link-container active">Distribution</div>
      </Link>
      {/* <Link className="links" to="/add-user">
        <div className="link-container">Add User</div>
      </Link> */}
      <Link className="links" to="/trace-drug">
        <div className="link-container">Trace</div>
      </Link>
    </div>
  );
};

const DistributionMainContent = () => {
  return (
    <div className="distribution-main">
      <DistributionForm />
    </div>
  );
};

const DistributionMainLayout = () => {
  return (
    <div className="distribution-main-layout">
      <div className="distribution-main-layout02">
        <DistributionSideBar />
        <DistributionMainContent />
      </div>
    </div>
  );
};

const DrugDistribution = () => {
  return (
    <div className="distribution-layout">
      <div className="distribution-main02">
        <DashboardAppBar />
        <DistributionMainLayout />
        <DashboardFooter />
      </div>
    </div>
  );
};

export default DrugDistribution;
