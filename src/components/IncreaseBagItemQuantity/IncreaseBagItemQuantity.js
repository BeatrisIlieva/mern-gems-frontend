import { useState } from "react";

import { useService } from "../../hooks/useService";
import { bagServiceFactory } from "../../services/bagService";

import { useBag } from "../../hooks/useBag";
import { useBagContext } from "../../contexts/BagContext";

export const IncreaseBagItemQuantity = ({ bagId }) => {
  const bagService = useService(bagServiceFactory);

  const { increaseBagItemTotalQuantityIntoState } = useBag();

  const { increaseBagTotalQuantityIntoState } = useBagContext();

  const increaseBagItemQuantity = async (bagId) => {
    try {
      await bagService.increase(bagId);

      increaseBagItemTotalQuantityIntoState(bagId);

      increaseBagTotalQuantityIntoState();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <button onClick={() => increaseBagItemQuantity(bagId)}>Increase</button>
  );
};
