import Board from "./components/Board";
import "./App.css";
import { useState } from "react";
import ScoreCard from "./components/ScoreCard";
import { Button } from "@mui/material";

function App() {
  const winSituation = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [board, setBoard] = useState(Array(9).fill(null));
  const [score, setScore] = useState({ xScore: 0, oScore: 0 });
  const [xPlaying, setXPlaying] = useState(true);
  const didWin = (board) => {
    for (let i = 0; i < winSituation.length; i++) {
      const [x, y, z] = winSituation[i];
      if (
        board[x] &&
        board[x] === board[y] &&
        board[y] === board[z] &&
        board[z]
      ) {
        return board[x];
      }
    }
  };

  const changeBoard = (boardId) => {
    if (!didWin(board)) {
      const newBoard = board.map((boardValue, index) => {
        if (boardId === index) {
          if (xPlaying) {
            return "X";
          } else {
            return "O";
          }
        } else {
          return boardValue;
        }
      });

      setBoard(newBoard);
      setXPlaying(!xPlaying);
      alertFunction(newBoard);
    }
  };

  const alertFunction = (board) => {
    const winner = didWin(board);
    if (winner) {
      if (winner === "X") {
        let { xScore } = score;
        xScore += 1;
        setScore({ ...score, xScore });
      } else {
        let { oScore } = score;
        oScore += 1;
        setScore({ ...score, oScore });
      }
      setXPlaying(true);
      // setTimeout(() => {
      //   alert(`${winner === "X" ? "Orange wins" : "Blue Wins"}`);
      // }, 100);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col space-y-2 justify-center items-center gap-y-3 ">
      <ScoreCard score={score} xPlaying={xPlaying} />
      <Board board={board} setBoard={setBoard} onClick={changeBoard} />
      <Button
        disableElevation
        variant="contained"
        color="success"
        onClick={() => {
          setBoard(Array(9).fill(null));
          setXPlaying(true);
        }}
      >
        Reset
      </Button>
    </div>
  );
}

export default App;
