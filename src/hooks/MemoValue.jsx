import React, { useState, useMemo, useEffect } from "react";

const MemoValue = () => {
  const [number, setNumber] = useState(0);
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const updateNumber = (e) => {
    setNumber(e.target.value);
  };
  const updatex = (e) => {
    setx(e.target.value);
  };
  const updatey = (e) => {
    sety(e.target.value);
  };

  const mulV = useMemo(() => {
    return mul(y);
  }, [y]);

  const squareV = useMemo(() => {
    return square(number);
  }, [number]);

  const addNumm = (x) => {
    return x + 1;
  };

  useEffect(() => {
    setAdd(addNumm(x));
  }, [x]);

  return (
    <div>
      Number of square
      <input type="text" value={number} onChange={updateNumber} />
      <br />
      <br />
      Add the number
      <input type="text" value={x} onChange={updatex} />
      <br />
      <br />
      multiply the number
      <input type="number" value={y} onChange={updatey} />
      <br />
      <br />
      <button onClick={increaseCount}>increaseCount</button>
      <br />
      <h1>Counter Value: {count}</h1>
      <h1>Square Value: {squareV}</h1>
      <h1>Add Value: {add}</h1>
      <h1>mull Value: {mulV}</h1>
    </div>
  );
};

function square(number) {
  return Math.pow(number, 2);
}

function mul(y) {
  return y * 2;
}
export default MemoValue;
