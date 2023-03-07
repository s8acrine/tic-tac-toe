import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const clickHandle = (index) => {
    let updatedBoard = [...squares];
    console.log("clicked:", index);
    updatedBoard[index] = "❌";
    setSquares(updatedBoard);
  };

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="gameBoard">
        {squares.map((value, index) => {
          return (
            <Square
              value={value}
              key={index}
              index={index}
              clickHandle={clickHandle}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
