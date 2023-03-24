import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";
import ResetButton from "./components/ResetButton";

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

    // Function to determine if the current player has won
    // Iterate through the array of winning combos and determine if any of a winning combo are all set to the same character
    // If true, set the current player as the winner (as you can only win on your turn by placing the)
    const checkWinner = () => {
      setSquares(updatedBoard); // update board state
      for (let i = 0; i < winningCombo.length; i++) {
        // iterate through each possible winning combination
        let [a, b, c] = winningCombo[i];
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

    //Function to manage the marking of the board
    // First checks to see if a winner has been declared, which prevents further markers
    // Then checks to see if the selected square already has been marked, in which case it sends an alert to choose another square
    // otherwhise checks the players turn and sets the value of the selected index to that icon
    // TODO: change the handling of playerturn conditionals to a switch to reduce code complexity
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
  // Set squares, playerTurn, and winner to their starting state
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setPlayerTurn("❌");
    setWinner(null);
  };

  return (
    <>
      {winner === null && <h1>Welcome To Tic Tac Toe</h1>}
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
        <ResetButton resetGame={resetGame} />
      </div>
    </>
  );
};

export default App;
