import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { ChildWrapper } from "../../../reusable/ChildWrapper/ChildWrapper";
import { LargeTitle } from "../../../reusable/LargeTitle/LargeTitle";
import { ShippingInformation } from "./ShippingInformation/ShippingInformation";
import { CardDetailsForm } from "../../../common/CardDetailsForm/CardDetailsForm";
import { ShippingDetailsForm } from "../../../common/ShippingDetailsForm/ShippingDetailsForm";
import { Popup } from "../../../reusable/Popup/Popup";

import { useLanguageContext } from "../../../../contexts/LanguageContext";

import { PAYMENT_NAMING } from "./constants/languageRelated";

export const CardDetailsContent = () => {
  const { language } = useLanguageContext();

  const [displayShippingDetailsPopup, setDisplayShippingDetailsPopup] =
    useState(false);

  const [movePopup, setMovePopup] = useState(false);

  const toggleDisplayShippingDetailsPopup = () => {
    setMovePopup(true);

    setTimeout(async () => {
      setDisplayShippingDetailsPopup(
        (displayShippingDetailsPopup) => !displayShippingDetailsPopup
      );

      setMovePopup(false);
    }, 400);
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
                <LargeTitle title={PAYMENT_NAMING[language]} />
                <CardDetailsForm />
              </>
            </ChildWrapper>
          }
        />
      </Routes>
      {displayShippingDetailsPopup && (
        <Popup
          movePopup={movePopup}
          toggleDisplayPopup={toggleDisplayShippingDetailsPopup}
          displayPopup={displayShippingDetailsPopup}
          overlayVariant={"top"}
          modalVariant={"top"}
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
