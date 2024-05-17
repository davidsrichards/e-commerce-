// Importing Modules

function Buttons({ title, value, handleClick }) {
  return (
    <>
      <button
        onClick={handleClick}
        value={value}
        className="border-none m-4 mt-2 text-xl font-normal py-1 px-2 rounded-lg bg-black text-white transition-4 hover:bg-yellow-400 hover:text-black"
      >
        {title}
      </button>
    </>
  );
}

export default Buttons;
