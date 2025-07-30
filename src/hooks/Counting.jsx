import React, { useReducer } from "react";
const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      if (state.count === 0) {
        return state;
      }
      return { count: state.count - 1 };
    default:
      throw new Error("Invalid Type");
  }
};

const Counting = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <center>
      count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </center>
  );
};
export default Counting;
