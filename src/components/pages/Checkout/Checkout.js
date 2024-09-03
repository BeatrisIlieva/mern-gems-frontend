import { useState } from "react";
import { useLocation, Routes, Route } from "react-router-dom";

import { ShoppingProcessContainer } from "../../reusable/ShoppingProcessContainer/ShoppingProcessContainer";
import { ShippingDetailsForm } from "../../common/ShippingDetailsForm/ShippingDetailsForm";
import { LargeTitle } from "../../reusable/LargeTitle/LargeTitle";
import { OrderSummary } from "../../common/OrderSummary/OrderSummary";
import { BagList } from "../../common/BagList/BagList";
import { ChildWrapper } from "../../reusable/ChildWrapper/ChildWrapper";
import { ShippingInformation } from "../Payment/ShippingInformation/ShippingInformation";
import { Popup } from "../../common/Popup/Popup";
import { CardDetailsForm } from "../../common/CardDetailsForm/CardDetailsForm";

export const Checkout = () => {
  const location = useLocation();

  const locationIsCheckout = location.pathname === "/checkout";

  const [displayShippingDetailsPopup, setDisplayShippingDetailsPopup] =
    useState(false);

  const toggleDisplayShippingDetailsPopup = () => {
    document.body.style.overflow = "visible";

    setDisplayShippingDetailsPopup(
      (displayShippingDetailsPopup) => !displayShippingDetailsPopup
    );
  };

  return (
    <>
      <ShoppingProcessContainer>
        <>
          {locationIsCheckout ? (
            <ChildWrapper>
              <>
                <LargeTitle title={"Shipping Address"} />
                <ShippingDetailsForm />
              </>
            </ChildWrapper>
          ) : (
            <Routes>
              <Route
                path="payment"
                element={
                  <ChildWrapper>
                    <ShippingInformation
                      toggleDisplayShippingDetailsPopup={
                        toggleDisplayShippingDetailsPopup
                      }
                    />
                    <>
                      <LargeTitle title={"Payment"} />
                      <CardDetailsForm />
                    </>
                  </ChildWrapper>
                }
              />
            </Routes>
          )}
        </>
        <ChildWrapper>
          <>
            <OrderSummary />
            <BagList />
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
    </>
  );
};
