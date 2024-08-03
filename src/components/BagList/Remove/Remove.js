import { useService } from "../../../hooks/useService";
import { bagServiceFactory } from "../../../services/bagService";

import { useBagContext } from "../../../contexts/BagContext";

import { UnderlinedButton } from "../../UnderlinedButton/UnderlinedButton";

export const Remove = ({ bagId }) => {
  const { removeBagItem, updateBagTotalQuantity } = useBagContext();

  const bagService = useService(bagServiceFactory);

  const removeItem = async () => {
    await bagService.decrease(bagId);

    removeBagItem(bagId);

    updateBagTotalQuantity(-1);
  };

  return <UnderlinedButton callBackFunction={removeItem} title={"Remove"} />;
};
