import { useState } from "react";

import { SectionContainer } from "../reusable/SectionContainer/SectionContainer";
import { ShippingDetailsForm } from "../../../common/ShippingDetailsForm/ShippingDetailsForm";
import { Popup } from "../../../common/Popup/Popup";

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
