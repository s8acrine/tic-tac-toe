import React from "react";

const Square = ({ index, clickHandle, value }) => {
  const handleClick = () => {
    clickHandle(index);
  };
  return (
    <div className={"square"} id={`square${index}`} onClick={handleClick}>
      {value}
    </div>
  );
};
export default Square;
