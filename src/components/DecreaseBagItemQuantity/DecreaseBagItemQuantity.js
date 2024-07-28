import { useState } from "react";

import { useService } from "../../hooks/useService";
import { bagServiceFactory } from "../../services/bagService";

import { useBag } from "../../hooks/useBag";
import { useBagContext } from "../../contexts/BagContext";

export const DecreaseBagItemQuantity = ({
  bagId,
  buttonDisabled,
  updateBagItemQuantity,
}) => {
  const bagService = useService(bagServiceFactory);

  const { updateBagTotalQuantityIntoState } = useBagContext();

  const decreaseBagItemQuantity = async (bagId) => {
    try {
      await bagService.decrease(bagId);

      updateBagItemQuantity(bagId, -1);

      updateBagTotalQuantityIntoState(-1);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <button onClick={() => decreaseBagItemQuantity(bagId)}>Decrease</button>
  );
};
