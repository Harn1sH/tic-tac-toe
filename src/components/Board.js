import React from "react";
import Box from "./Box";

const Board = ({ board, onClick }) => {
  return (
    <div className="">
      <div className="grid grid-cols-3">
        {board.map((value, index) => {
          return (
            <>
              <Box
                value={value}
                onClick={() => {
                  value === null && onClick(index);
                }}
                key={index}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
