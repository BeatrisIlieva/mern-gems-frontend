import { useBagContext } from "../../../contexts/BagContext";

import { NonEmptyBag } from "./NonEmptyBag/NonEmptyBag";

import { EmptyBag } from "./EmptyBag/EmptyBag";

export const Bag = () => {
  const { bagTotalQuantityIntoState } = useBagContext();

  return <>{bagTotalQuantityIntoState > 0 ? <NonEmptyBag /> : <EmptyBag />}</>;
};
