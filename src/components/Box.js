import React from "react";

const Box = ({ value, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={
          value === "X"
            ? "text-orange-500 h-[100px] active:bg-neutral-200 w-[100px] m-3 hover:scale-105 hover:shadow-[0px_0px_30px_rgba(0,0,0,0.6)] text-center font-extrabold text-7xl duration-200 rounded-lg shadow-[0px_0px_10px_rgba(0,0,0,0.6)]"
            : "text-blue-500 h-[100px] active:bg-neutral-200 w-[100px] m-3 hover:scale-105 hover:shadow-[0px_0px_30px_rgba(0,0,0,0.6)] text-center font-extrabold text-7xl duration-200 rounded-lg shadow-[0px_0px_10px_rgba(0,0,0,0.6)]"
        }
      >
        {value}
      </button>
    </>
  );
};

export default Box;
