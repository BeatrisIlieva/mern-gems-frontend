import { NonEmptyBag } from "./NonEmptyBag/NonEmptyBag";
import { EmptyBag } from "./EmptyBag/EmptyBag";

import { useBagContext } from "../../../contexts/BagContext";

export const Bag = () => {
  const { bagTotalQuantity, totalPrice} = useBagContext();

  return <>{(bagTotalQuantity < 1 && totalPrice < 1) ? <EmptyBag /> : <NonEmptyBag />}</>;
};
