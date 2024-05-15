import { useState } from "react";
import ItemContext from "./ItemContext";

const ItemContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <ItemContext.Provider value={{ count, setCount }}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
