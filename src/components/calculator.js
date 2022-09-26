import React, { useState } from "react";
import "./calculator.css";

export default function Calculator() {
  const [val, setVal] = useState();

  const clickhand = (e) => {
    setVal(e.target.value);
    console.log(e.target.value);
  };

  // const handleClick = (e) => {
  //   // console.log(e.target.value);

  // };

  const handleChange = (e) => {};

  return (
    <>
      <div className="container" onClick={clickhand}>
        <input type="text" value={val} onChange={handleChange} />
        <div className="btn">
          <button value="9">9</button>
          <button value="8">8</button>
          <button value="7">7</button>
          <button value="/">/</button>
        </div>
        <div className="btn">
          <button value="6">6</button>
          <button value="5">5</button>
          <button value="4">4</button>
          <button value="*">X</button>
        </div>
        <div className="btn">
          <button value="3">3</button>
          <button value="2">2</button>
          <button value="1">1</button>
          <button value="-">-</button>
        </div>
        <div className="btn">
          <button value="=">=</button>
          <button value="">Clear</button>
          <button>C</button>
          <button value="+">+</button>
        </div>
      </div>
    </>
  );
}
