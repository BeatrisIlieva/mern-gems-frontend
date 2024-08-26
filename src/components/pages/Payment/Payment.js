import { useState } from "react";

import { ShoppingProcessContainer } from "../../reusable/ShoppingProcessContainer/ShoppingProcessContainer";
import { LargeTitle } from "../../reusable/LargeTitle/LargeTitle";
import { ShippingInformation } from "./ShippingInformation/ShippingInformation";
import { CardDetailsForm } from "../../common/CardDetailsForm/CardDetailsForm";
import { OrderSummary } from "../../common/OrderSummary/OrderSummary";
import { BagList } from "../../common/BagList/BagList";
import { ChildWrapper } from "../../reusable/ChildWrapper/ChildWrapper";
import { Popup } from "../../common/Popup/Popup";
import { ShippingDetailsForm } from "../../common/ShippingDetailsForm/ShippingDetailsForm";

export const Payment = () => {
  const [displayShippingDetailsPopup, setDisplayShippingDetailsPopup] =
    useState(false);

  const toggleDisplayShippingDetailsPopup = () => {
    document.body.style.overflow = "visible";

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
