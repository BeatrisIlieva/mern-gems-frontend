import { useService } from "../../hooks/useService";

import { bagServiceFactory } from "../../services/bagService";

export const Bag = () => {
  const bagService = useService(bagServiceFactory);
};
