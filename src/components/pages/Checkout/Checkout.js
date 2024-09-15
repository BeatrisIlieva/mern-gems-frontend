import { useLocation } from "react-router-dom";

import { CheckoutProcessContainer } from "../../reusable/CheckoutProcessContainer/CheckoutProcessContainer";
import { OrderSummary } from "../../common/OrderSummary/OrderSummary";
import { BagList } from "../../common/BagList/BagList";
import { ChildWrapper } from "../../reusable/ChildWrapper/ChildWrapper";
import { ShippingContent } from "./ShippingContent/ShippingContent";
import { CardDetailsContent } from "./CardDetailsContent/CardDetailsContent";

export const Checkout = () => {
  const location = useLocation();

  const locationIsCheckout = location.pathname === "/checkout";

  return (
    <>
      <CheckoutProcessContainer>
        <>{locationIsCheckout ? <ShippingContent /> : <CardDetailsContent />}</>
        <ChildWrapper>
          <>
            <OrderSummary />
            <BagList />
          </>
        </ChildWrapper>
      </CheckoutProcessContainer>
    </>
  );
};
