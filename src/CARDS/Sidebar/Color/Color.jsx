// Importing Modules

import Input from "../../Component/Input/Input";
import "./Color.css";

function Color({ handleChange }) {
  return (
    <>
      <div>
        <h2 className="sidebar-title">Color</h2>

        <div>
          <label className="sidebar-label-container">
            <input type="radio" onChange={handleChange} value="" name="test3" />
            <span className="checkMark all"></span>All
          </label>

          <Input
            title="Blue"
            value="blue"
            name="test3"
            handleChange={handleChange}
            color="blue"
          />

          <Input
            title="Green"
            value="green"
            name="test3"
            handleChange={handleChange}
            color="green"
          />

          <Input
            title="Brown"
            value="brown"
            name="test3"
            handleChange={handleChange}
            color="brown"
          />

          <Input
            title="Red"
            value="red"
            name="test3"
            handleChange={handleChange}
            color="red"
          />

          <label className="sidebar-label-container">
            <input
              type="radio"
              value="white"
              name="test3"
              onChange={handleChange}
              /* color="white" */
            />
            <span className="checkMark white"></span>
            White
          </label>
        </div>
      </div>
    </>
  );
}

export default Color;
