import { createContext, useContext, useState } from "react";

const GiftContext = createContext();

export const GiftProvider = ({ children }) => {
  const [surprise, setsurprise] = useState({
    first: "Apple",
    fruit: "banana",
  });

  return (
    <GiftContext.Provider value={{ surprise, setsurprise }}>
      {children}
    </GiftContext.Provider>
  );
};
export const useData = () => useContext(GiftContext);
