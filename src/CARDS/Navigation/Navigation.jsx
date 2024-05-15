// Importing Modules

import "./Navigation.css";
import { FaHome } from "react-icons/fa";

import { CiSearch } from "react-icons/ci";
<CiSearch />;
import { IoIosMenu } from "react-icons/io";
<IoIosMenu />;
import { FaUser } from "react-icons/fa";

import { FaShoppingCart } from "react-icons/fa";

import { TbCurrencyNaira } from "react-icons/tb";
<TbCurrencyNaira />;
import { BsCurrencyDollar } from "react-icons/bs";
import { useContext } from "react";
import ItemContext from "../ItemContext";
<BsCurrencyDollar />;
import { useNavigate } from "react-router-dom";

// Navigation Function

function Navigation({ query, handleInputChange }) {
  const navigate = useNavigate();
  const { count } = useContext(ItemContext);
  return (
    <>
      <nav className="nav">
        <div className="icons-container">
          <input
            type="text"
            placeholder="Search wears"
            onChange={handleInputChange}
            value={query}
            className="-mt-4 outline-none border focus:border-green-500 focus:ring-2 py-1 px-2 bg-gray-300 placeholder:text-white placeholder:text-xl focus:bg-white rounded-lg"
          />
          <FaHome className="fa ic" />

          <div className="ic">
            <div
              className="border -mt-1 px-2.5 h-9 flex items-center rounded-full bg-black text-white"
              onClick={() => navigate("cart")}
            >
              {count}
            </div>
            <FaUser className="user mr" />
            <FaShoppingCart className="cart mr" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
