import { useEffect, useState } from "react";

import { useService } from "../../../../hooks/useService";
import { bagServiceFactory } from "../../../../services/bagService";

import { useBagContext } from "../../../../contexts/BagContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Icon } from "../../../Icon/Icon";

import { faMinus } from "@fortawesome/free-solid-svg-icons";

import styles from "./DecreaseQuantityButton.module.css";

export const DecreaseQuantityButton = ({ bagId }) => {
  const bagService = useService(bagServiceFactory);

  const { updateBagTotalQuantityIntoState, updateBagItemQuantityIntoState } =
    useBagContext();

  const updateBagItemQuantity = async () => {
    try {
      await bagService.decrease(bagId);

      updateBagItemQuantityIntoState(bagId, -1);

      updateBagTotalQuantityIntoState(-1);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <FontAwesomeIcon
      onClick={updateBagItemQuantity}
      icon={faMinus}
      className={styles["enabled"]}
    />
  );
};
