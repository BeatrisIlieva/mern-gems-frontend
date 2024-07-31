import { useService } from "../../../hooks/useService";
import { bagServiceFactory } from "../../../services/bagService";

import { useBagContext } from "../../../contexts/BagContext";

export const Remove = ({ bagId }) => {
  const { removeBagItem } = useBagContext();

  const bagService = useService(bagServiceFactory);

  const removeItem = async () => {
    await bagService.decrease(bagId);

    removeBagItem(bagId);
  };

  return <button onClick={removeItem}>Remove</button>;
};
