import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { ChildWrapper } from "../../../reusable/ChildWrapper/ChildWrapper";
import { LargeTitle } from "../../../reusable/LargeTitle/LargeTitle";
import { ShippingInformation } from "./ShippingInformation/ShippingInformation";
import { CardDetailsForm } from "../../../common/CardDetailsForm/CardDetailsForm";
import { ShippingDetailsForm } from "../../../common/ShippingDetailsForm/ShippingDetailsForm";
import { Popup } from "../../../reusable/Popup/Popup";

export const CardDetailsContent = () => {
  const [displayShippingDetailsPopup, setDisplayShippingDetailsPopup] =
    useState(false);

  const toggleDisplayShippingDetailsPopup = () => {
    setDisplayShippingDetailsPopup(
      (displayShippingDetailsPopup) => !displayShippingDetailsPopup
    );
  };

  return (
    <>
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
      {displayShippingDetailsPopup && (
        <Popup
          toggleDisplayPopup={toggleDisplayShippingDetailsPopup}
          modalVariant={"large"}
          displayPopup={displayShippingDetailsPopup}
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
    </>
  );
};
