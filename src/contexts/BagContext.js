import {
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo,
  useCallback,
} from "react";

import { useAuthenticationContext } from "../contexts/AuthenticationContext";

import { useService } from "../hooks/useService";

import { bagServiceFactory } from "../services/bagService";

export const BagContext = createContext();

export const BagProvider = ({ children }) => {
  const { userId } = useAuthenticationContext();

  const [bagItems, setBagItems] = useState([]);

  const bagService = useService(bagServiceFactory);

  const totalPrice = useMemo(() => {
    return bagItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [bagItems.length]);

  const bagTotalQuantity = useMemo(() => {
    return bagItems.reduce((total, item) => total + item.quantity, 0);
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

  const add = useCallback(
    async (size, jewelryId, userId) => {
      await bagService.add(size, jewelryId, userId);
    },
    [bagService]
  );

  const increase = useCallback(
    async (bagId) => {
      await bagService.increase(bagId);
    },
    [bagService]
  );

  const decrease = useCallback(
    async (bagId) => {
      await bagService.decrease(bagId);
    },
    [bagService]
  );

  const remove = useCallback(
    async (bagId) => {
      await bagService.delete(bagId);
    },
    [bagService]
  );

  const context = useMemo(
    () => ({
      bagItems,
      totalPrice,
      bagTotalQuantity,
      increase,
      decrease,
      remove,
      add,
    }),
    [bagItems, totalPrice, bagTotalQuantity, increase, decrease, remove, add]
  );

  return <BagContext.Provider value={context}>{children}</BagContext.Provider>;
};

export const useBagContext = () => {
  const context = useContext(BagContext);

  return context;
};
