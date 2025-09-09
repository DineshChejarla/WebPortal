import React from "react";
import Mumbai from "./Mumbai";
const Delhi = ({ gift }) => {
  return (
    <div>
      I am Delhi
      <Mumbai gift={gift} />
    </div>
  );
};
export default Delhi;
