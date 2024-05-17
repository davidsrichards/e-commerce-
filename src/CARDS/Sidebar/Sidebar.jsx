// Importing Modules

import "./Sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Color from "./Color/Color";

function Sidebar({ handleChange }) {
  return (
    <>
      <section className="sidebar-container mt-20 ">
        <div className="sidebar-inner-container flex flex-col bg-sky-300 items-center justify-start relative -top-2 shadow-sm ">
          <Category handleChange={handleChange} />
          <Price handleChange={handleChange} />
          <Color handleChange={handleChange} />
        </div>
      </section>
    </>
  );
}

export default Sidebar;
