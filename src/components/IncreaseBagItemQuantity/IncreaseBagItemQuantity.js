import { useEffect, useState } from "react";

import { useService } from "../../hooks/useService";
import { bagServiceFactory } from "../../services/bagService";

import { useBag } from "../../hooks/useBag";
import { useBagContext } from "../../contexts/BagContext";

import styles from "./IncreaseBagItemQuantity.module.css";

export const IncreaseBagItemQuantity = ({
  bagId,
  buttonDisabled,
  updateBagItemQuantity,
}) => {
  const bagService = useService(bagServiceFactory);

  const { updateBagTotalQuantityIntoState } = useBagContext();

  const increaseBagItemQuantity = async (bagId) => {
    try {
      await bagService.increase(bagId);

      updateBagItemQuantity(bagId, +1);

      updateBagTotalQuantityIntoState(+1);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <button
      className={
        buttonDisabled === false
          ? `${styles["button"]}`
          : `${styles["disabled"]}`
      }
      onClick={() => increaseBagItemQuantity(bagId)}
      disabled={buttonDisabled}
    >
      Increase
    </button>
  );
};
