// Importing Modules

import Input from "../../Component/Input/Input";
import "./Price.css";

function Price({ handleChange }) {
  return (
    <>
      <div className="relative left-3">
        <h2 className="sidebar-title">Price</h2>

        <div>
          <Input
            title="All"
            value=""
            name="test2"
            handleChange={handleChange}
          />

          <Input
            title="$0-$50"
            value={50}
            name="test2"
            handleChange={handleChange}
          />

          <Input
            title="$50-$100"
            value={100}
            name="test2"
            handleChange={handleChange}
          />

          <Input
            title="$100-$150"
            value={150}
            name="test2"
            handleChange={handleChange}
          />

          <Input
            title="Over $150"
            value={200}
            name="test2"
            handleChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

export default Price;
