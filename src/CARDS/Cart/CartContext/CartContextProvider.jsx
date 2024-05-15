import { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = ({ children }) => {
  const [cartObject, setCartObject] = useState([]);
  return (
    <>
      <CartContext.Provider value={{ cartObject, setCartObject }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;
