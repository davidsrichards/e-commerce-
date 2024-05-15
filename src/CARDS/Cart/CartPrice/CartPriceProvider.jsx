import { useState } from "react";
import CartPriceContext from "./CartPriceContext";

const CartPriceProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <>
      <CartPriceContext.Provider value={{ totalPrice, setTotalPrice }}>
        {children}
      </CartPriceContext.Provider>
    </>
  );
};

export default CartPriceProvider;
