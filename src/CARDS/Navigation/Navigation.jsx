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
            {count !== 0 && (
              <div
                className="-mt-1 text-[17px] w-6 h-[1.4rem] pt-[-15px] justify-center absolute items-center rounded-full text-white right-[1.1rem] top-[-10px] bg-orange-300 text-center font-mono"
                onClick={() => navigate("cart")}
              >
                {count}
              </div>
            )}
            <FaUser className="user mr" />
            <FaShoppingCart className="cart mr" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
