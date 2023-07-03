import React from "react";

const ScoreCard = ({ score, xPlaying }) => {
  return (
    <div
      className={
        xPlaying
          ? "flex rounded-lg justify-around w-[350px] text-3xl font-bold transition-all duration-300 border-orange-500"
          : "flex rounded-lg justify-around w-[350px] text-3xl font-bold transition-all duration-300 border-blue-600"
      }
    >
      <div
        className={
          xPlaying
            ? "text-orange-500 border-b-[6px] w-full border-orange-500 text-center rounded-l-lg"
            : "text-orange-500 border-b-[0] w-full border-orange-500 text-center rounded-l-lg"
        }
      >
        X: {score.xScore}
      </div>
      <div
        className={
          xPlaying
            ? "text-blue-600 border-b-[px] w-full border-blue-600 text-center rounded-r-lg"
            : "text-blue-600 border-b-[6px] w-full border-blue-600 text-center rounded-r-lg"
        }
      >
        O: {score.oScore}
      </div>
    </div>
  );
};

export default ScoreCard;
