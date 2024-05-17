// Importing modules

import { FaShoppingCart } from "react-icons/fa";

// Function For EmptyItem

function EmptyItem() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center ">
        <div className="flex flex-col items-center justify-center gap-5 lg:fixed lg:w-3/4 lg:h-3/4 shadow-md border-t-2 border-slate-100 w-[35rem] h-[25rem]">
          <div className="bg-gray-200 p-6 rounded-full">
            <FaShoppingCart className="text-[4.5rem] mx-auto text-orange-300" />
          </div>
          <p className="overflow-hidden font-normal text-2xl">
            Your cart is empty!
          </p>
          <p className="overflow-hidden font-normal text-xl">
            Browse our categories and discover our best deals!
          </p>
          <button className="bg-orange-400 p-4 rounded-lg font-normal text-[23px] text-white hover:bg-orange-500 mt-2">
            START SHOPPING
          </button>
        </div>
      </div>
    </>
  );
}

export default EmptyItem;
