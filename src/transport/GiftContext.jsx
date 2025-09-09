import { createContext, useContext, useState } from "react";

const GiftContext = createContext();

export const GiftProvider = ({ children }) => {
  const [surprise, setSurprise] = useState({
    first: "Apple",
    fruit: "banana",
  });

  return (
    <GiftContext.Provider value={{ surprise, setSurprise }}>
      {children}
    </GiftContext.Provider>
  );
};

export const useData = () => useContext(GiftContext);
