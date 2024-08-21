import { NonEmptyBag } from "./NonEmptyBag/NonEmptyBag";
import { EmptyBag } from "./EmptyBag/EmptyBag";

import { useBag } from "../../../hooks/useBag";
import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

export const Bag = () => {


  const { bagTotalQuantity } = useBag();

  return <>{bagTotalQuantity > 0 ? <NonEmptyBag /> : <EmptyBag />}</>;
};
