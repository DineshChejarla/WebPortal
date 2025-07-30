import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Add +1</button>
    </div>
  );
};

export const Example = () => {
  return <h2>Example</h2>;
};
