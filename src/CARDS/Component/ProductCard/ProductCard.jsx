import wear from "../../../assets/Images/wear.jpg";
import { useContext, useState } from "react";
import "./ProductCard.css";
import ItemContext from "../../ItemContext";
import CartContext from "../../Cart/CartContext/CartContext";
import CartPriceContext from "../../Cart/CartPrice/CartPriceContext";

// Product Cart Function

function ProductCard({ img, title, newPrice, prevPrice, reviews, star }) {
  // Count Context API used In the Navigation File

  let { count, setCount } = useContext(ItemContext);

  // Cart Context API Used In the Cart File

  let { cartObject, setCartObject } = useContext(CartContext);

  // CartPrice API used in Cart File

  let { setTotalPrice } = useContext(CartPriceContext);

  const IncrementItems = (e) => {
    e.preventDefault();
    if (count < 9) {
      newPrice = Number(newPrice);
      setCount(count + 1);
      const newObject = { image: img, titles: title, price: newPrice };
      setCartObject((c) => [...c, newObject]);
      setTotalPrice((p) => p + newPrice);

      console.log(typeof newPrice);
    }

    console.log(count);
  };

  return (
    <>
      <div className="product-inner-container">
        <div className="products-inner-container2">
          <img src={img} alt="Wear" className="wear" />

          <div className="prod-details">
            <div className="prod-line"></div>
            <h4 className="prod-name">{title}</h4>
            <div className="price">
              $<del>{prevPrice}</del> {newPrice}.00
              {/*  */}
              <button className="add bg-yellow-400" onClick={IncrementItems}>
                Add
              </button>
            </div>
            <div className="stars flex items-center">
              {star}
              {star}
              {star}
              {star}
              <span>{reviews}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
