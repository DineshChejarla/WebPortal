import React from "react";
import Kolkata from "../transport/Kolkata";
import { useData } from "./GiftContext";
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
