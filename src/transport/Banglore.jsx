import React from "react";
import { useData } from "./GiftContext";
const Banglore = ({ gift }) => {
  const { surprise } = useData();
  return (
    <div>
      {gift}I am Banglore,{" "}
      <span style={{ color: "green" }}>{surprise.first}</span> received from
      Delhi.
    </div>
  );
};
export default Banglore;
