import { NonEmptyBag } from "./NonEmptyBag/NonEmptyBag";
import { EmptyBag } from "./EmptyBag/EmptyBag";

import { useBag } from "../../../hooks/useBag";
import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

export const Bag = () => {
  const { userId } = useAuthenticationContext();

  const { bagItems } = useBag({ userId });

  return <>{bagItems.length > 0 ? <NonEmptyBag /> : <EmptyBag />}</>;
};
