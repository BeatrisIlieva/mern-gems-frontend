import { useState, useEffect } from "react";

import { useService } from "./useService";

import { useAuthenticationContext } from "../contexts/AuthenticationContext";

import { bagServiceFactory } from "../services/bagService";

export const useBag = () => {
  const bagService = useService(bagServiceFactory);

  const { userId } = useAuthenticationContext();

  const [loading, setLoading] = useState(true);

  const [bagItems, setBagItems] = useState([]);

  const increaseBagItemTotalQuantityIntoState = (bagId) => {
    setBagItems((state) =>
      state.map((x) =>
        x._id === bagId ? { ...x, quantity: x.quantity + 1 } : x
      )
    );
  };

  const decreaseBagItemTotalQuantityIntoState = (bagId) => {
    setBagItems((state) =>
      state.map((x) =>
        x._id === bagId ? { ...x, quantity: x.quantity + 1 } : x
      )
    );
  };

  useEffect(() => {
    setLoading(true);

    bagService
      .getAll(userId)
      .then((data) => {
        setBagItems(data);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [bagItems]);

  return {
    loading,
    bagItems,
    increaseBagItemTotalQuantityIntoState,
    decreaseBagItemTotalQuantityIntoState,
  };
};
