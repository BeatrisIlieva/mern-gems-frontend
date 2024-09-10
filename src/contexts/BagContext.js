import {
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo,
  useCallback,
} from "react";

import { useLocation } from "react-router-dom";

import { useAuthenticationContext } from "../contexts/AuthenticationContext";

import { useService } from "../hooks/useService";

import { bagServiceFactory } from "../services/bagService";

export const BagContext = createContext();

export const BagProvider = ({ children }) => {
  const location = useLocation();

  const locationIsOrderConfirmation =
    location.pathname === "/order-confirmation";

  const { userId, isAuthenticated } = useAuthenticationContext();

  const [bagItems, setBagItems] = useState([]);

  const bagService = useService(bagServiceFactory);

  const [isProcessing, setIsProcessing] = useState(false);

  const [processingBagId, setProcessingBagId] = useState(null);

  const totalPrice = useMemo(() => {
    return bagItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [bagItems]);

  const bagTotalQuantity = useMemo(() => {
    return isAuthenticated
      ? bagItems.reduce((total, item) => total + item.quantity, 0)
      : 0;
  }, [bagItems, isAuthenticated]);

  const fetchBagItems = useCallback(async () => {
    try {
      const data = await bagService.getAll(userId);
      const modifiedData = data.map((item) => ({
        ...item,
        totalPrice: item.quantity * item.price,
      }));

      setBagItems(modifiedData);
    } catch (err) {
      console.log(err.message);
    }
  }, [bagService, userId]);

  useEffect(() => {
    fetchBagItems();
  }, [fetchBagItems, locationIsOrderConfirmation]);

  const add = useCallback(
    async (size, jewelryId, userId) => {
      await bagService.add(size, jewelryId, userId);

      await fetchBagItems();
    },
    [bagService, fetchBagItems]
  );

  const increase = async (bagId) => {
    setIsProcessing(true);

    setProcessingBagId(bagId);

    await bagService.increase(bagId);

    await fetchBagItems();

    setIsProcessing(false);

    setProcessingBagId(null);
  };

  const decrease = async (bagId) => {
    setIsProcessing(true);

    setProcessingBagId(bagId);

    await bagService.decrease(bagId);

    await fetchBagItems();

    setIsProcessing(false);

    setProcessingBagId(null);
  };

  const remove = useCallback(
    async (bagId) => {
      await bagService.delete(bagId);

      await fetchBagItems();
    },
    [bagService, fetchBagItems]
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
      isProcessing,
      processingBagId,
    }),
    [bagItems, totalPrice, bagTotalQuantity, increase, decrease, remove, add]
  );

  return <BagContext.Provider value={context}>{children}</BagContext.Provider>;
};

export const useBagContext = () => {
  const context = useContext(BagContext);

  return context;
};
