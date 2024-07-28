import { createContext, useContext } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

export const BagContext = createContext();

export const BagProvider = ({ children }) => {
  const [bagTotalQuantityIntoState, setBagTotalQuantityIntoState] =
    useLocalStorage("bagTotalQuantity", 0);

  const increaseBagTotalQuantityIntoState = () => {
    setBagTotalQuantityIntoState(bagTotalQuantityIntoState + 1);
  };

  const decreaseBagTotalQuantityIntoState = () => {
    setBagTotalQuantityIntoState(bagTotalQuantityIntoState - 1);
  };

  const context = {
    bagTotalQuantityIntoState,
    increaseBagTotalQuantityIntoState,
    decreaseBagTotalQuantityIntoState,
  };

  return <BagContext.Provider value={context}>{children}</BagContext.Provider>;
};

export const useBagContext = () => {
  const context = useContext(BagContext);

  return context;
};
