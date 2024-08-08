import { UnderlinedButton } from "../../UnderlinedButton/UnderlinedButton";

import { useBagContext } from "../../../contexts/BagContext";

import { useService } from "../../../hooks/useService";

import { bagServiceFactory } from "../../../services/bagService";

export const Remove = ({ bagId }) => {
  const { removeBagItem, updateBagTotalQuantity } = useBagContext();

  const bagService = useService(bagServiceFactory);

  const removeItem = async () => {
    await bagService.delete(bagId);

    removeBagItem(bagId);

    updateBagTotalQuantity(-1);
  };

  return <UnderlinedButton title={"Remove"} callBackFunction={removeItem} />;
};
