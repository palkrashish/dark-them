import React from "react";
import "./Toggle.css";

const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div className="toggle_container">
      <input type="checkbox" id="check" className="toggle" onChange={handleChange} checked={isChecked} />
      <label htmlFor="check" >Dark Mode</label>
    </div>
  );
};

export default Toggle;
