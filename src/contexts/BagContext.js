import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

import { useAuthenticationContext } from "./AuthenticationContext";

import { useService } from "../hooks/useService";
import { bagServiceFactory } from "../services/bagService";

import { useLocalStorage } from "../hooks/useLocalStorage";

import { useParams } from "react-router-dom";

import { useJewelryItemContext } from "./JewelryItemContext";

export const BagContext = createContext();

export const BagProvider = ({ children }) => {
  const [bagTotalQuantity, setBagTotalQuantity] = useLocalStorage(
    "bagTotalQuantity",
    0
  );

  const bagService = useService(bagServiceFactory);

  const { userId } = useAuthenticationContext();

  const [bagItems, setBagItems] = useState([]);

  const bagIsEmpty = bagItems.length < 1;

  const [totalPrice, setTotalPrice] = useState(0);

  const { jewelryId } = useParams();

  const { increaseSizeQuantity } = useJewelryItemContext();

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

  const updateBagTotalQuantity = (delta) => {
    setBagTotalQuantity(bagTotalQuantity + delta);
  };

  const removeBagItem = (bagId) => {
    setBagItems((prevBagItems) =>
      prevBagItems.filter((item) => item._id !== bagId)
    );

    const bag = bagItems.filter((item) => item._id === bagId);
    
    if (bag.jewelryId === jewelryId) {
      const sizeId = bag[0].sizeId;

      increaseSizeQuantity(sizeId);
    }
  };

  const clearShoppingBag = () => {
    localStorage.setItem("bagTotalQuantity", 0);

    setBagTotalQuantity(0);
  };

  const context = {
    bagTotalQuantity,
    updateBagTotalQuantity,
    bagItems,
    totalPrice,
    bagIsEmpty,
    clearShoppingBag,
    removeBagItem,
  };

  return <BagContext.Provider value={context}>{children}</BagContext.Provider>;
};

export const useBagContext = () => {
  const context = useContext(BagContext);

  return context;
};
