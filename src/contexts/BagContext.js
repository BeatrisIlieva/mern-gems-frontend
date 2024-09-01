import { useState, useEffect, createContext, useContext } from "react";

import { useAuthenticationContext } from "../contexts/AuthenticationContext";

import { useService } from "../hooks/useService";

import { bagServiceFactory } from "../services/bagService";

export const BagContext = createContext();

export const BagProvider = ({ children }) => {
  const { userId } = useAuthenticationContext();

  const [bagItems, setBagItems] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  const [bagTotalQuantity, setBagTotalQuantity] = useState(0);

  const bagService = useService(bagServiceFactory);

  useEffect(() => {
    setTotalPrice(
      bagItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0)
    );
  }, [bagItems]);

  useEffect(() => {
    setBagTotalQuantity(
      bagItems.reduce((total, item) => {
        return total + item.quantity;
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

  const add = async (size, jewelryId, userId) => {
    await bagService.add(size, jewelryId, userId);
  };

  const increase = async (bagId) => {
    await bagService.increase(bagId);

    setBagTotalQuantity((oldQuantity) => oldQuantity + 1);
  };

  const decrease = async (bagId) => {
    await bagService.decrease(bagId);

    setBagTotalQuantity((oldQuantity) => oldQuantity - 1);
  };

  const remove = async (bagId) => {
    await bagService.delete(bagId);
  };

  const context = {
    bagItems,
    totalPrice,
    bagTotalQuantity,
    increase,
    decrease,
    remove,
    add,
  };

  return <BagContext.Provider value={context}>{children}</BagContext.Provider>;
};

export const useBagContext = () => {
  const context = useContext(BagContext);

  return context;
};
