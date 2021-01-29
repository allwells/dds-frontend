import React from "react";
import "./AddDrug.css";
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

const DrugForm = () => {
  return (
    <form className="drug-form" method="post" action="#">
      <div className="drug-form-heading">
        <h1>Add Drug</h1>
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
          label="Drug Name"
          type="text"
          fieldName="name"
          className="name field"
          fieldId="name"
        />
        <InputField
          label="Manufacturing Date"
          type="date"
          fieldName="manufacture"
          className="manufacture field"
          fieldId="manufacture"
        />

        <InputField
          label="Expiry Date"
          type="date"
          fieldName="expiry"
          className="expiry field"
          fieldId="expiry"
        />
        <InputField
          label="NAFDAC Registration No."
          type="text"
          fieldName="nafdac"
          className="nafdac field"
          fieldId="nafdac"
        />
        <InputField
          label="Net Weight"
          type="text"
          fieldName="weight"
          className="weight field"
          fieldId="weight"
        />
        <InputField
          label="Producer"
          type="text"
          fieldName="producer"
          className="producer field"
          fieldId="producer"
        />
        <div className="type-container">
          <label>
            Type:
            <input
              className="type"
              type="radio"
              name="type"
              id="type"
              value="local"
            />
            <label htmlFor="type">Local</label>
            <input
              className="type"
              type="radio"
              name="type"
              id="type"
              value="foreign"
            />
            <label htmlFor="type">Foreign</label>
          </label>
        </div>
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

const DrugSideBar = () => {
  return (
    <div className="drug-sidebar">
      <Link className="links" to="/dashboard">
        <div className="link-container">Dashboard</div>
      </Link>
      <Link className="links" to="/add-drug">
        <div className="link-container active">Add Drug</div>
      </Link>
      <Link className="links" to="/distribution">
        <div className="link-container">Distribution</div>
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

const DrugMainContent = () => {
  return (
    <div className="drug-main">
      <DrugForm />
    </div>
  );
};

const DrugMainLayout = () => {
  return (
    <div className="drug-main-layout">
      <div className="drug-main-layout02">
        <DrugSideBar />
        <DrugMainContent />
      </div>
    </div>
  );
};

const AddDrug = () => {
  return (
    <div className="drug-layout">
      <div className="drug-main02">
        <DashboardAppBar />
        <DrugMainLayout />
        <DashboardFooter />
      </div>
    </div>
  );
};

export default AddDrug;
