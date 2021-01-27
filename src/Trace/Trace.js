import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import "./Track.css";

const InputField = ({
  divClassName,
  className,
  placeholder,
  type,
  name,
  id,
}) => {
  return (
    <div className={divClassName}>
      <input
        placeholder={placeholder}
        className={className}
        type={type}
        name={name}
        id={id}
        required
      />
    </div>
  );
};

const TraceButton = ({ divClassName, className, type, value }) => {
  return (
    <div className={divClassName}>
      <input className={className} type={type} value={value} />
    </div>
  );
};

const Form = ({ divClassName, method, action }) => {
  return (
    <form className={divClassName} method={method} action={action}>
      <InputField
        divClassName="serial"
        className="serial"
        placeholder="Serial Number"
        type="text"
        name="serial"
        id="serial"
      />
      <TraceButton
        divClassName="trace-btn"
        className="trace-btn"
        type="submit"
        value="Trace Drug"
      />
    </form>
  );
};

const Track = () => {
  return (
    <div>
      <NavBar />
      <div className="extra-padding"></div>
      <div className="track-bg-img">
        <div className="track-tint">
          <Form divClassName="trace-form" method="get" action="#" />
        </div>
      </div>
    </div>
  );
};

export default Track;
