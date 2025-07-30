import React from "react";
import Kolkata from "./Kolkata";
import { useData } from "./ExampleContext";
const Mumbai = ({ gift }) => {
  const { surprise } = useData();
  return (
    <div>
      Mumbai is "{surprise.fruit}"
      <Kolkata gift={gift} />
    </div>
  );
};

export default Mumbai;
