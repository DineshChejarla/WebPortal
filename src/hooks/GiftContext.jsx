import { createContext } from "react";
const GiftContext = createContext();
export default GiftContext;

import { Children, createContext, useContext, useState } from "react";
const GiftContext = createContext();
const GiftProvider = ({ Children }) => {
  const [surprise, setSurprise] = useDtate("Apple");
  return (
    <GiftContext.Provider value={{ surprise, setSurprise }}>
      {Children}
    </GiftContext.Provider>
  );
};
export const useData = () => useContext(GiftContext);
