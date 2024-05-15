// Importing Modules
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import CartContext from "./CartContext/CartContext";
import "./Cart.css";
import wear from "../../assets/Images/wear.jpg";
import CartPriceContext from "./CartPrice/CartPriceContext";
import ItemContext from "../ItemContext";

function Cart() {
  // Importing Count

  const { setCount } = useContext(ItemContext);

  // Importing CartObject

  const { cartObject, setCartObject } = useContext(CartContext);

  // Importing CartPrice

  const { totalPrice } = useContext(CartPriceContext);

  // Function To Remove item

  const removeItem = (index) => {
    const updatedItme = cartObject.filter((_, id) => id !== index);
    setCartObject(updatedItme);
    setCount((c) => c - 1);
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <h1 className="space-y-2 py-8 fixed z-50 text-black bg-blue-400 w-full flex top-0 items-center justify-center text-xl font-bold">
          Total Amount: ${totalPrice}
        </h1>
        <div className="w-full h-screen items-center justify-center sm:flex sm:flex-wrap lg:grid lg:grid-cols-2 relative top-20">
          {cartObject.map(({ image, titles }, id) => (
            <div
              className="max-w-30 border border-2 items-center mx-auto"
              key={id}
            >
              <img src={image} alt="" className="mx-auto bg-cover" />
              <p className="text-wrap max-w-60 text-start mx-auto font-bold">
                {titles}
              </p>
              <div className="flex items-center justify-center text-2xl">
                {" "}
                <span className="flex items-center mx-10  my-5 relative right-10">
                  <MdDelete
                    className="cursor-pointer text-red-400 mx-2 mr-4 text-3xl"
                    onClick={() => removeItem(id)}
                  />
                  Remove
                </span>
                <span className="flex items-center">
                  <button className="mx-3 bg-red-300 px-3 h-6 items-center flex rounded-lg font-bold justify-center">
                    <span className="relative -top-1">-</span>
                  </button>
                  <span>0</span>
                  <button className="mx-3 bg-green-300 px-3 h-6 items-center flex rounded-lg font-bold border-none">
                    <span className="relative -top-1">+</span>
                  </button>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cart;

/* 
<div className="border border-solid flex flex-col items-center justify-center">
<div className="flex items-center justify-center m-4 gap-4">
  <img src={wear} alt="wear" />
  <h1 className="text-3xl ">Senator Wear</h1>
</div>
<div className="bg-black flex px-40 h-20 text-white items-center">
  <div className="relative right-36 flex items-center m-2">
    <MdDelete className="cursor-pointer text-3xl" />
    <h1 className="text-2xl relative left-10">Remove</h1>
  </div>
  <div className="flex relative left-20 justify-around items-center">
    <button className=" relative right-20 px-5 py-1 bg-red-400 rounded-lg text-2xl">
      -
    </button>
    <span className="relative right-6 text-2xl monospace">0</span>
    <button className="relative left-5 bg-teal-400 px-5 py-1 rounded-lg text-2xl">
      +
    </button>
  </div>
</div>
</div> */

/* 

<div className="cart-container">
        {cartObject.map(({ image, titles }) => (
          <div className="cart-inner-container">
            <div className="card-details">
              <img src={image} alt="cart" />
              <div className="cart-details">
                <h4>{titles}</h4>
                <div className="cart-price">
                  $<del>300</del> 200.00
                </div>
              </div>
            </div>

            <div className="cart-modify">
              <div className="remove-all">
                <MdDelete className="cart-delete-icon rm" />
                <h2 className="delete-all rm">Remove</h2>
              </div>
              <div className="remove-bit">
                <button className="minus-btn bit-btn">-</button>
                <div className="num bit-btn bit-count">0</div>
                <button className="plus-btn bit-btn">+</button>
              </div>
            </div>
          </div>
        ))}
      </div> */
