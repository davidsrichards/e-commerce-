// Importing Modules

import Input from "../../Component/Input/Input";
import "./Category.css";

function Category({ handleChange }) {
  return (
    <>
      <div>
        <h2 className="sidebar-title">Category</h2>
        <div>
          <Input
            handleChange={handleChange}
            title="All"
            value=""
            name="test1"
          />
          <Input
            handleChange={handleChange}
            title="Men"
            value="men"
            name="test1"
          />

          <Input
            handleChange={handleChange}
            title="Women"
            value="women"
            name="test1"
          />

          <Input
            handleChange={handleChange}
            title="Children"
            value="children"
            name="test1"
          />
        </div>
      </div>
    </>
  );
}

export default Category;
