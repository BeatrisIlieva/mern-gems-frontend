import { useState } from "react";

import { SectionContainer } from "../SectionContainer/SectionContainer";
import { ShippingDetailsForm } from "../../ShippingDetailsForm/ShippingDetailsForm";
import { Popup } from "../../Popup/Popup";

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
      {displayPopup && (
        <Popup
          popupCloseHandler={toggleDisplayPopup}
          title={"Add a New Address"}
          variant={"large"}
        >
          <ShippingDetailsForm popupCloseHandler={toggleDisplayPopup} />
        </Popup>
      )}
    </>
  );
};
