// Importing Modules

import "./Input.css";

// Input Functuion
function Input({ handleChange, title, value, name, color }) {
  return (
    <>
      <label className="sidebar-label-container">
        <input type="radio" name={name} onChange={handleChange} value={value} />
        <span className="checkMark" style={{ backgroundColor: color }}></span>
        {title}
      </label>
    </>
  );
}

export default Input;
