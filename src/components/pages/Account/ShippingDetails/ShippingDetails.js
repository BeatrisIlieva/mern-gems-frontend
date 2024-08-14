import { useState } from "react";

import { SectionContainer } from "../SectionContainer/SectionContainer";
import { ShippingDetailsForm } from "../../../reusable/ShippingDetailsForm/ShippingDetailsForm";
import { Popup } from "../../../reusable/Popup/Popup";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { LargeTitle } from "../../../reusable/LargeTitle/LargeTitle";

export const ShippingDetails = () => {
  const [displayPopup, setDisplayPopup] = useState(false);

  const toggleDisplayPopup = () => {
    setDisplayPopup((displayPopup) => !displayPopup);
  };

  return (
    <>
      <SectionContainer
        sectionTitle={"Address Book"}
        callBackFunction={toggleDisplayPopup}
        icon={faPlus}
        buttonTitle={"Add a New Address"}
      />
      {displayPopup && (
        <Popup popupCloseHandler={toggleDisplayPopup} modalVariant={"large"}>
          <LargeTitle title={"Add a New Address"} textAlign={"align-center"} />
          <ShippingDetailsForm popupCloseHandler={toggleDisplayPopup} />
        </Popup>
      )}
    </>
  );
};
