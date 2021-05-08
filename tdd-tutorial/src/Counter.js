import React, { useState, useCallback } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const onIncreaseNumber = useCallback(() => {
    setNumber(number + 1);
  }, [number]);
  const onDecreaseNumber = useCallback(() => {
    setNumber(number - 1);
  }, [number]);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncreaseNumber}>+1</button>
      <button onClick={onDecreaseNumber}>-1</button>
    </div>
  );
};

export default Counter;
