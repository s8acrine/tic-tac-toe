import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState("❌");

  const clickHandle = (index) => {
    let updatedBoard = [...squares];
    if (squares[index] !== null){
        alert('Please use another square')
    }else if (playerTurn === "❌") {
      updatedBoard[index] = "❌";
      setSquares(updatedBoard);
      setPlayerTurn("⭕️");
    } else if (playerTurn === "⭕️") {
      updatedBoard[index] = "⭕️";
      setSquares(updatedBoard);
      setPlayerTurn("❌");
    }
  };

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <h2> Current Player: {playerTurn}</h2>
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
