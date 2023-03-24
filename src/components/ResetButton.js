import React from "react";

const ResetButton = ({ resetGame }) => {
  return (
    <div>
      <button id="resetButton" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default ResetButton;
