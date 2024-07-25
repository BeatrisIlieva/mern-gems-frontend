import { createContext, useContext } from "react";

export const BagContext = createContext();

export const BagProvider = ({ children }) => {
  const [bagQuantity, setBagQuantity] = useState(0);

  const updateBagQuantity = (action) => {
    if (action == "subtract") {
      setBagQuantity(bagQuantity - 1);
    } else if (action == "add") {
      setBagQuantity(bagQuantity + 1);
    }
  };

  const context = {
    bagQuantity,
    updateBagQuantity,
  };

  return <BagContext.Provider value={context}>{children}</BagContext.Provider>;
};

export const useBagContext = () => {
  const context = useContext(BagContext);

  return context;
};
