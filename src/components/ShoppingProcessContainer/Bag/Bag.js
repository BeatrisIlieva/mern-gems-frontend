import { useBagContext } from "../../../contexts/BagContext";

import { NonEmptyBag } from "./NonEmptyBag/NonEmptyBag";

import { EmptyBag } from "./EmptyBag/EmptyBag";

export const Bag = () => {
  const { bagTotalQuantity } = useBagContext();

  return <>{bagTotalQuantity > 0 ? <NonEmptyBag /> : <EmptyBag />}</>;
};
