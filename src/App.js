import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState("❌");
  const [winner, setWinner] = useState(null)
  const winningCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  const clickHandle = (index) => {
    let updatedBoard = [...squares];
    const checkWinner = () =>{
      setSquares(updatedBoard)
      for(let i = 0; i < winningCombo.length; i++){
          const [a,b,c] = winningCombo[i] 
        if (updatedBoard[a] && updatedBoard[a] === updatedBoard[b] && updatedBoard[a] === updatedBoard[c]) {
          setWinner(playerTurn);

        }
      }
    }
    console.log(winner, squares);
    if (winner !== null){
      return null
    }
    else if (squares[index] !== null){
        alert('Please use another square')
    }else if (playerTurn === "❌") {
      updatedBoard[index] = "❌";
      setSquares(updatedBoard);
      checkWinner()
      setPlayerTurn("⭕️");
    } else if (playerTurn === "⭕️") {
      updatedBoard[index] = "⭕️";
      setSquares(updatedBoard);  
      checkWinner()
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
