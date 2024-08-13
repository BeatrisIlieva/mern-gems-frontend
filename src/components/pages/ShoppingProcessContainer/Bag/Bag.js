import { NonEmptyBag } from "./NonEmptyBag/NonEmptyBag";
import { EmptyBag } from "./EmptyBag/EmptyBag";

import { useBagContext } from "../../../../contexts/BagContext";

export const Bag = () => {
  const { bagTotalQuantity } = useBagContext();

  return <>{bagTotalQuantity > 0 ? <NonEmptyBag /> : <EmptyBag />}</>;
};
