// Importing Modules

import "./Card.css";
import Sidebar from "./Sidebar/Sidebar";
import Navigation from "./Navigation/Navigation";
import Recommended from "./Recommended/Recommended";
import Produts from "./Products/Products";
import products from "../Store/Store";
import { useState } from "react";
import ProductCard from "./Component/ProductCard/ProductCard";

// Card Function

function Card() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // handle Input

  const handleInputChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  // handle Buttons

  const handleClick = (event) => {
    event.preventDefault();
    setSelectedCategory(event.target.value);
  };

  // handle change

  const handleChange = (event) => {
    event.preventDefault();
    setSelectedCategory(event.target.value);
  };

  const filteredItem = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  function filteredData(products, selected, query) {
    let filteredProducts = products;
    if (query) {
      filteredProducts = filteredItem;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ title, category, color, reviews, prevPrice, newPrice }) =>
          title === selected ||
          category === selected ||
          color === selected ||
          reviews === selected ||
          prevPrice === selected ||
          newPrice === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, newPrice, prevPrice, reviews, star }) => (
        <ProductCard
          key={Math.random()}
          img={img}
          title={title}
          newPrice={newPrice}
          prevPrice={prevPrice}
          reviews={reviews}
          star={star}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <div className="card-container">
        <Sidebar handleChange={handleChange} />
        <Navigation query={query} handleInputChange={handleInputChange} />
        <Recommended handleClick={handleClick} />
        <Produts result={result} />
      </div>
    </>
  );
}

export default Card;
