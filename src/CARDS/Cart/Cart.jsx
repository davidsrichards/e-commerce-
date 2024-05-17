// Importing Modules
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import CartContext from "./CartContext/CartContext";
import "./Cart.css";
import wear from "../../assets/Images/wear.jpg";
import CartPriceContext from "./CartPrice/CartPriceContext";
import ItemContext from "../ItemContext";
import EmptyItem from "./EmptyItem";

function Cart() {
  // Importing Number of items

  const { count } = useContext(ItemContext);

  // Importing Count

  const { setCount } = useContext(ItemContext);

  // Importing CartObject

  const { cartObject, setCartObject } = useContext(CartContext);

  // Importing CartPrice

  const { totalPrice, setTotalPrice } = useContext(CartPriceContext);

  // Function To Update the Amount

  const updateAmount = (price) => {
    setTotalPrice(totalPrice - price);
    console.log(typeof count);
  };

  // Function To Remove item

  const removeItem = (index) => {
    const updatedItme = cartObject.filter((_, id) => id !== index);
    setCartObject(updatedItme);
    setCount((c) => c - 1);
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <h1 className="space-y-2 py-8 fixed z-50 text-black bg-blue-300 w-full flex top-0 items-center justify-center text-xl font-bold font-sans">
          Total Amount: ${totalPrice}
        </h1>
        <div className="w-full h-screen flex items-center justify-center sm:flex sm:flex-wrap lg:grid lg:grid-cols-2 relative top-20">
          {count === 0 ? (
            <span className="">
              <EmptyItem />
            </span>
          ) : (
            cartObject.map(({ image, titles, price }, id) => (
              <div className="max-w-30 border-2 items-center mx-auto" key={id}>
                <img src={image} alt="" className="mx-auto bg-cover" />
                <p className="text-wrap max-w-60 text-start mx-auto font-bold">
                  {titles}
                </p>
                <div className="flex items-center justify-center text-2xl">
                  {" "}
                  <span className="flex items-center mx-10  my-5 relative right-10">
                    <MdDelete
                      className="cursor-pointer text-red-400 mx-2 mr-4 text-3xl"
                      onClick={() => {
                        removeItem(id);
                        updateAmount(price);
                      }}
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
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
