import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null)); // Create an array of squares to use as the gameboard and fill each index of the array with null
  const [playerTurn, setPlayerTurn] = useState("❌"); // Use state to manage the current player's turn
  const [winner, setWinner] = useState(null); // Use state to manage the current winner, either null, ❌, or ⭕️
  const winningCombo = [
    // Set of winning combinations (three in a row horizontally, vertically, or diagonally)
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const clickHandle = (index) => {
    let updatedBoard = [...squares]; // set the current gamestate to a variable

    const checkWinner = () => {
      // check to see if the current player has won
      setSquares(updatedBoard); // update board state
      for (let i = 0; i < winningCombo.length; i++) {
        // iterate through each possible winning combination
        const [a, b, c] = winningCombo[i];
        if (
          updatedBoard[a] &&
          updatedBoard[a] === updatedBoard[b] &&
          updatedBoard[a] === updatedBoard[c]
        ) {
          // Check to see if any of the winningCombo arrays are filled with the same icon
          setWinner(playerTurn); // Set the winner to the current player's turn
        }
      }
    };

    if (winner !== null) {
      return null;
    } else if (squares[index] !== null) {
      alert("Please use another square");
    } else if (playerTurn === "❌") {
      updatedBoard[index] = "❌";
      setSquares(updatedBoard);
      checkWinner();
      setPlayerTurn("⭕️");
    } else if (playerTurn === "⭕️") {
      updatedBoard[index] = "⭕️";
      setSquares(updatedBoard);
      checkWinner();
      setPlayerTurn("❌");
    }
  };

  return (
    <>
      <h1>Tic Tac Toe</h1>
      {winner === "⭕️" && <h1>⭕️ wins</h1>}
      {winner === "❌" && <h1>❌ wins</h1>}
      {!squares.includes(null) && <h1>It's a Draw</h1>}

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
