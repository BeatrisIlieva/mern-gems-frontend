import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

import { useService } from "../hooks/useService";

export const JewelryItemContext = createContext();

export const JewelryItemProvider = ({ children }) => {
  const context = {};

  return (
    <JewelryItemContext.Provider value={context}>
      {children}
    </JewelryItemContext.Provider>
  );
};

export const useJewelryItemContext = () => {
  const context = useContext(JewelryItemContext);

  return context;
};
