import { useService } from "../../../../../hooks/useService";
import { bagServiceFactory } from "../../../../../services/bagService";

import { useBagContext } from "../../../../../contexts/BagContext";

import { Icon } from "../../../../Icon/Icon";

import { faMinus } from "@fortawesome/free-solid-svg-icons";

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
    <Icon
      callBackFunction={updateBagItemQuantity}
      icon={faMinus}
      variant={"icon"}
    />
  );
};
