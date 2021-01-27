import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import { Link } from "react-router-dom";
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

const Track = () => {
  return (
    <div>
      <NavBar />
      <div className="extra-padding"></div>
      <div className="track-bg-img">
        <div className="track-tint">
          <InputField
            divClassName="serial"
            className="serial"
            placeholder="Serial Number"
            type="text"
            name="serial"
            id="serial"
          />
        </div>
      </div>
    </div>
  );
};

export default Track;
