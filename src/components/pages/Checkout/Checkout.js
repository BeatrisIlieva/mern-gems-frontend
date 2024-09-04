
import { useLocation} from "react-router-dom";

import { ShoppingProcessContainer } from "../../reusable/ShoppingProcessContainer/ShoppingProcessContainer";
import { OrderSummary } from "../../common/OrderSummary/OrderSummary";
import { BagList } from "../../common/BagList/BagList";
import { ChildWrapper } from "../../reusable/ChildWrapper/ChildWrapper";

import { Popup } from "../../common/Popup/Popup";

import { ShippingContent } from "./ShippingContent/ShippingContent";
import { CardDetailsContent } from "./CardDetailsContent/CardDetailsContent";

export const Checkout = () => {
  const location = useLocation();

  const locationIsCheckout = location.pathname === "/checkout";



  return (
    <>
      <ShoppingProcessContainer>
        <>{locationIsCheckout ? <ShippingContent /> : <CardDetailsContent />}</>
        <ChildWrapper>
          <>
            <OrderSummary />
            <BagList />
          </>
        </ChildWrapper>
      </ShoppingProcessContainer>
    </>
  );
};
