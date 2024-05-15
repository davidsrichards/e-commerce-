// Importing Modules

function Buttons({ title, value, handleClick }) {
  return (
    <>
      <button
        onClick={handleClick}
        value={value}
        className="border-none m-4 mt-2 text-xl font-normal py-1 px-2 rounded-lg bg-black text-white"
      >
        {title}
      </button>
    </>
  );
}

export default Buttons;
