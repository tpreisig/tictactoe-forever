
# Tic-Tac-Toe React Application

A classic **Tic-Tac-Toe** game implemented in React with TypeScript. This project serves as a clean, functional, and type-safe implementation of the traditional two-player game, featuring real-time winner detection and turn-based gameplay.

## App

![screenshot](/src/assets/winner.png)

## Features

- Fully interactive 3×3 game board
- Alternating turns between players **X** and **O**
- Immediate winner detection upon achieving three in a row (horizontal, vertical, or diagonal)
- Prevents further moves after a winner is declared or the board is full
- Clean separation of components: `App`, `Board`, and `Square`
- Written in **React** with **TypeScript** for type safety
- Minimal and readable code structure

## Coding Highlights

🏆 Showcasing how PropTypes can be replaced by the use of TypeScript.

🏆 Comes with a bunch of benefits over PropTypes like:
- compile-time checking instead of runtime checking
- no need for additonal dependency (prop-types)
- more precise type definitions
- type inference for variables

🏆 TSX solution for PropTypes:

```bash
interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
```

## Components Overview

#### `App.tsx`
The root component that wraps the game board in a styled container.

#### `Board.tsx`
Core game logic including:
- State management using `useState` for board squares and current player
- Winner calculation via `calculateWinner` function
- Click handler that enforces game rules
- Status display showing current player or winner

#### `Square.tsx`
Presentational component representing a single cell on the board. Receives `value` and `onSquareClick` as props.


## Installation

```bash
git clone https://github.com/tpreisig/tictactoe-forever
npm install
npm run dev
```

Open `http://localhost:3000` to play.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Maintained by tpreisig - feel free to reach out!
