import React, { useRef } from "react";

const Dom = () => {
  const count = useRef(0);
  const CheckValue = () => {
    count.current++;
  };
  return (
    <div>
      <h1>{count.current}</h1>
      <button onClick={CheckValue}>Check Value</button>
    </div>
  );
};
export default Dom;
