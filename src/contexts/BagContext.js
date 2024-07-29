// import { createContext, useContext } from "react";

// import { useLocalStorage } from "../hooks/useLocalStorage";

// export const BagContext = createContext();

// export const BagProvider = ({ children }) => {
//   const [bagTotalQuantityIntoState, setBagTotalQuantityIntoState] =
//     useLocalStorage("bagTotalQuantity", 0);

//   const updateBagTotalQuantityIntoState = (delta) => {
//     setBagTotalQuantityIntoState(bagTotalQuantityIntoState + delta);
//   };

//   const context = {
//     bagTotalQuantityIntoState,
//     updateBagTotalQuantityIntoState,
//   };

//   return <BagContext.Provider value={context}>{children}</BagContext.Provider>;
// };

// export const useBagContext = () => {
//   const context = useContext(BagContext);

//   return context;
// };

import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

import { useAuthenticationContext } from "./AuthenticationContext";

import { useService } from "../hooks/useService";
import { bagServiceFactory } from "../services/bagService";

import { useLocalStorage } from "../hooks/useLocalStorage";

export const BagContext = createContext();

export const BagProvider = ({ children }) => {
  const [bagTotalQuantityIntoState, setBagTotalQuantityIntoState] =
    useLocalStorage("bagTotalQuantity", 0);

  const updateBagTotalQuantityIntoState = (delta) => {
    setBagTotalQuantityIntoState(bagTotalQuantityIntoState + delta);
  };

  const bagService = useService(bagServiceFactory);

  const { userId } = useAuthenticationContext();

  const [bagItems, setBagItems] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      bagItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0)
    );
  }, [bagItems]);

  useEffect(() => {
    bagService
      .getAll(userId)
      .then((data) => {
        const modifiedData = data.map((item) => ({
          ...item,
          totalPrice: item.quantity * item.price,
        }));

        setBagItems(modifiedData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userId, bagService]);

  const updateBagItemQuantityIntoState = (bagId, delta) => {
    setBagItems((state) => {
      const updatedItems = state.map((item) =>
        item._id === bagId
          ? {
              ...item,
              quantity: item.quantity + delta,
              inventoryQuantity: item.inventoryQuantity - delta,
            }
          : item
      );

      return updatedItems.filter((item) => item.quantity > 0);
    });
  };

  const context = {
    bagTotalQuantityIntoState,
    updateBagTotalQuantityIntoState,
    bagItems,
    updateBagItemQuantityIntoState,
    totalPrice,
  };

  return <BagContext.Provider value={context}>{children}</BagContext.Provider>;
};

export const useBagContext = () => {
  const context = useContext(BagContext);

  return context;
};
