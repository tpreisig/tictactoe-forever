import { useState } from "react";
import Square from "./Square";

// Define types
type SquareValue = "X" | "O" | null;
type SquaresArray = SquareValue[];

const Board = () => {
  const [squares, setSquares] = useState<SquaresArray>(Array(9).fill(null));
  const [xNow, setXNow] = useState<boolean>(true);

  function handleClick(i: number): void {
    console.log(i);
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xNow ? "X" : "O";
    setSquares(nextSquares);
    setXNow(!xNow);
  }

  function calculateWinner(squares: SquaresArray): SquareValue {
    const lines: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const winner: SquareValue = calculateWinner(squares);
  const status: string = winner
    ? `🏆 Winner ${winner}`
    : `➡️ Player ${xNow ? "X" : "O"}`;

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Board;
