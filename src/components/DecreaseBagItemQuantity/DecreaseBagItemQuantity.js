import { useState } from "react";

import { useService } from "../../hooks/useService";
import { bagServiceFactory } from "../../services/bagService";

import { useBag } from "../../hooks/useBag";
import { useBagContext } from "../../contexts/BagContext";

export const DecreaseBagItemQuantity = ({ bagId }) => {
  const bagService = useService(bagServiceFactory);

  const { decreaseBagItemTotalQuantityIntoState } = useBag();

  const { decreaseBagTotalQuantityIntoState } = useBagContext();

  const decreaseBagItemQuantity = async (bagId) => {
    try {
      await bagService.decrease(bagId);

      decreaseBagItemTotalQuantityIntoState(bagId);

      decreaseBagTotalQuantityIntoState();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <button onClick={() => decreaseBagItemQuantity(bagId)}>Decrease</button>
  );
};
