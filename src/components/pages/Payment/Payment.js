import { useState } from "react";

import { ShoppingProcessContainer } from "../../reusable/ShoppingProcessContainer/ShoppingProcessContainer";
import { LargeTitle } from "../../reusable/LargeTitle/LargeTitle";
import { ShippingInformation } from "./ShippingInformation/ShippingInformation";
import { CardDetailsForm } from "../../reusable/CardDetailsForm/CardDetailsForm";
import { OrderSummary } from "../../common/OrderSummary/OrderSummary";
import { BagList } from "../../reusable/BagList/BagList";
import { ChildWrapper } from "../../reusable/ChildWrapper/ChildWrapper";
import { Popup } from "../../reusable/Popup/Popup";
import { ShippingDetailsForm } from "../../reusable/ShippingDetailsForm/ShippingDetailsForm";

export const Payment = () => {
  const [displayShippingDetailsPopup, setDisplayShippingDetailsPopup] =
    useState(false);

  const toggleDisplayShippingDetailsPopup = () => {
    setDisplayShippingDetailsPopup(
      (displayShippingDetailsPopup) => !displayShippingDetailsPopup
    );
  };

  return (
    <ShoppingProcessContainer title={"Payment"}>
      <ChildWrapper>
        <ShippingInformation
          toggleDisplayShippingDetailsPopup={toggleDisplayShippingDetailsPopup}
        />
        <>
          <LargeTitle title={"Payment"} />
          <CardDetailsForm />
        </>
      </ChildWrapper>
      <ChildWrapper>
        <>
          <OrderSummary />
          <BagList variant={"shopping-process-container"} />
        </>
      </ChildWrapper>
      {displayShippingDetailsPopup && (
        <Popup
          popupCloseHandler={toggleDisplayShippingDetailsPopup}
          modalVariant={"large"}
        >
          <LargeTitle
            title={"Edit Shipping Address"}
            textAlign={"align-center"}
          />
          <ShippingDetailsForm
            popupCloseHandler={toggleDisplayShippingDetailsPopup}
          />
        </Popup>
      )}
    </ShoppingProcessContainer>
  );
};
