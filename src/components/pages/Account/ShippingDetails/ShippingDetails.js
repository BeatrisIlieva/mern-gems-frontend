import { useState, useEffect, useRef } from "react";

import { SectionContainer } from "../reusable/SectionContainer/SectionContainer";
import { ShippingDetailsForm } from "../../../common/ShippingDetailsForm/ShippingDetailsForm";
import { Popup } from "../../../reusable/Popup/Popup";
import { LargeTitle } from "../../../reusable/LargeTitle/LargeTitle";

import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const ShippingDetails = () => {
  const popupRef = useRef(null);

  const [displayPopup, setDisplayPopup] = useState(false);

  const toggleDisplayPopup = () => {
    setDisplayPopup((displayPopup) => !displayPopup);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        toggleDisplayPopup();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        toggleDisplayPopup();
      }
    };

    if (displayPopup) {
      document.addEventListener("mousedown", handleClickOutside);

      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);

      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [displayPopup]);

  return (
    <>
      <SectionContainer
        sectionTitle={"Address Book"}
        callBackFunction={toggleDisplayPopup}
        icon={faPlus}
        buttonTitle={"Add a New Address"}
      />
      {displayPopup && (
        <Popup popupRef={popupRef} popupCloseHandler={toggleDisplayPopup} modalVariant={"large"}>
          <LargeTitle title={"Add a New Address"} textAlign={"align-center"} />
          <ShippingDetailsForm popupCloseHandler={toggleDisplayPopup} />
        </Popup>
      )}
    </>
  );
};
