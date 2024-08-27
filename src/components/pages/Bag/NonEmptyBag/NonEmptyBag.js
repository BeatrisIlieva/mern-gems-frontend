import { ShoppingProcessContainer } from "../../../reusable/ShoppingProcessContainer/ShoppingProcessContainer";
import { OrderSummaryContent } from "./OrderSummaryContent/OrderSummaryContent";
import { BagContent } from "./BagContent/BagContent";

import { useIsMobile } from "../../../../hooks/useIsMobile";

export const NonEmptyBag = () => {
  const { isReversed } = useIsMobile();

  return (
    <>
      {isReversed ? (
        <ShoppingProcessContainer>
          <OrderSummaryContent />
          <BagContent />
        </ShoppingProcessContainer>
      ) : (
        <ShoppingProcessContainer>
          <BagContent />
          <OrderSummaryContent />
        </ShoppingProcessContainer>
      )}
    </>
  );
};
