import { useState } from "react";

import { SectionContainer } from "../SectionContainer/SectionContainer";
import { ShippingDetailsPopup } from "../../ShippingDetailsPopup/ShippingDetailsPopup";

import { faPlus } from "@fortawesome/free-solid-svg-icons";

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
      <ShippingDetailsPopup
        displayPopup={displayPopup}
        popupCloseHandler={toggleDisplayPopup}
      />
    </>
  );
};
