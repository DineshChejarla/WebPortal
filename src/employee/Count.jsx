import React from "react";

const Count = ({ text, count }) => {
  return (
    <p>
      {text} is {count}
    </p>
  );
};

export default React.memo(Count);
