import React, { useState } from "react";

export default function Color() {
  const [color, changeColor] = useState("blue");

  function handleClick(e) {
    changeColor(e.target.value);
  }

  return (
    <>
      <button value="blue" onClick={handleClick}>
        blue
      </button>
      <button value="green" onClick={handleClick}>
        green
      </button>
      <button value="red" onClick={handleClick}>
        red
      </button>

      <div className={`box ${color}`}>Lorem Ipsum</div>
    </>
  );
}
