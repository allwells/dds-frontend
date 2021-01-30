import React, { useState, useEffect } from "react";
import "./DrugDistribution.css";
import Services from "../Services/services";
import DashboardAppBar from "../Components/DashboardAppBar/DashboardAppBar";
import DashboardFooter from "../Components/DashboardFooter/DashboardFooter";
import { Link } from "react-router-dom";
import axios from "axios";

const InputField = ({
  label,
  type,
  fieldName,
  className,
  fieldId,
  onChange,
}) => {
  return (
    <div className="inputs">
      <label htmlFor={fieldId}>{label}</label>
      <input
        onChange={onChange}
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

const DistributionForm = () => {
  const initialState = {
    serial_number: "",
    source: "",
    destination: "",
    batch: 0,
    low_range: 0,
    high_range: 0,
    start_date: "",
    stop_date: "",
    custodian: "",
  };

  const [formState, setFormState] = React.useState(initialState);
  return (
    <form
      className="distribution-form"
      onSubmit={async (event) => {
        event.preventDefault();
        console.log(formState);
        const response = await axios.post(
          "http://localhost:3001/api/distribution",
          formState
        );
        const data = await response.json();
        console.log(data);
      }}
    >
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
          value={formState.serial_number}
          onChange={({ target }) => {
            setFormState({ ...formState, serial_number: target.value });
          }}
        />
        <InputField
          label="Source"
          type="text"
          fieldName="source"
          className="source field"
          fieldId="source"
          value={formState.source}
          onChange={({ target }) =>
            setFormState({ ...formState, source: target.value })
          }
        />
        <InputField
          label="Destination"
          type="text"
          fieldName="destination"
          className="destination field"
          fieldId="destination"
          value={formState.destination}
          onChange={({ target }) =>
            setFormState({ ...formState, destination: target.value })
          }
        />

        <InputField
          label="Batch"
          type="number"
          fieldName="batch"
          className="batch field"
          fieldId="batch"
          value={formState.batch}
          onChange={({ target }) =>
            setFormState({ ...formState, batch: target.value })
          }
        />
        <InputField
          label="Lowest Range"
          type="number"
          fieldName="low_range"
          className="low_range field"
          fieldId="low_range"
          value={formState.low_range}
          onChange={({ target }) =>
            setFormState({ ...formState, low_range: target.value })
          }
        />
        <InputField
          label="Highest Range"
          type="number"
          fieldName="high_range"
          className="high_range field"
          fieldId="high-range"
          value={formState.high_range}
          onChange={({ target }) =>
            setFormState({ ...formState, high_range: target.value })
          }
        />
        <InputField
          label="Departure Date"
          type="date"
          fieldName="departure"
          className="departure field"
          fieldId="departure"
          value={formState.start_date}
          onChange={({ target }) =>
            setFormState({ ...formState, start_date: target.value })
          }
        />
        <InputField
          label="Arrival Date"
          type="date"
          fieldName="arrival"
          className="arrival field"
          fieldId="arrival"
          value={formState.stop_date}
          onChange={({ target }) =>
            setFormState({ ...formState, stop_date: target.value })
          }
        />
        <InputField
          label="Moved By"
          type="text"
          fieldName="moved"
          className="moved field"
          fieldId="moved"
          value={formState.custodian}
          onChange={({ target }) =>
            setFormState({ ...formState, custodian: target.value })
          }
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
