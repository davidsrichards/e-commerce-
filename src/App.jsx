// Importing Modules

import Card from "./CARDS/Card";
import ItemContextProvider from "./CARDS/ItemContextProvider";
import RegistrationPage from "./LOGIN SESSION/RegistrationPage/RegistrationPage";
import LoginPage from "./LOGIN SESSION/LoginPage/LoginPage";
import Cart from "./CARDS/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import CartContextProvider from "./CARDS/Cart/CartContext/CartContextProvider";
import CartPriceProvider from "./CARDS/Cart/CartPrice/CartPriceProvider";
function App() {
  return (
    <>
      <CartPriceProvider>
        <ItemContextProvider>
          <CartContextProvider>
            <Routes>
              <Route path="/" element={<Card />} />
              <Route path="cart" element={<Cart />} />
            </Routes>
          </CartContextProvider>
        </ItemContextProvider>
      </CartPriceProvider>
    </>
  );
}

export default App;
