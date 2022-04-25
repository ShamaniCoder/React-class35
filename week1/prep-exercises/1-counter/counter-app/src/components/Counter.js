import React from "react";
import { useState } from "react";
import Count from "./Count";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";
  
  const increaseOne = () => {
    if (count > 0) {
      setCount(count + 1);
    }
  };
  const decreaseOne = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="counter">
      <h1>{feedback}</h1>
      <Count number={count} />
      <div className="button">
        <Button  text="Add 1" onClick={increaseOne} />
        <Button  text="Minus 1" onClick={decreaseOne} />
      </div>
    </div>
  );
}

export default Counter;
