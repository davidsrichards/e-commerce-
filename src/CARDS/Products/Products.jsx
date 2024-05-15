// Importing Modules

import "./Products.css";
import ProductCard from "../Component/ProductCard/ProductCard";

// Products Function

function Produts({ result }) {
  return (
    <>
      <section className="products-container bg-black sm:ml-40 -mt-10 lg:mt-10">
        {result}
      </section>
    </>
  );
}

export default Produts;
