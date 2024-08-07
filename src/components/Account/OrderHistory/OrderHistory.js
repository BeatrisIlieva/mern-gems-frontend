import { useState } from "react";
import { SectionContainer } from "../SectionContainer/SectionContainer";
import { Popup } from "./Popup/Popup";

import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";

export const OrderHistory = () => {
  const [displayPopup, setDisplayPopup] = useState(false);

  const toggleDisplayPopup = () => {
    setDisplayPopup((displayPopup) => !displayPopup);
  };

  return (
    <>
      <SectionContainer
        sectionTitle={"Order History"}
        callBackFunction={toggleDisplayPopup}
        icon={faClockRotateLeft}
        buttonTitle={"View Order History"}
      />
      <Popup
        displayPopup={displayPopup}
        popupCloseHandler={toggleDisplayPopup}
      />
    </>
  );
};
