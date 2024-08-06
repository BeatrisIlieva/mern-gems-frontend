import { useState } from "react";

import { SectionContainer } from "../SectionContainer/SectionContainer";
import { CardDetailsPopup } from "./CardDetailsPopup/CardDetailsPopup";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const CardDetails = () => {
  const [displayPopup, setDisplayPopup] = useState(false);

  const toggleDisplayPopup = () => {
    setDisplayPopup((displayPopup) => !displayPopup);
  };

  return (
    <>
      <SectionContainer
        sectionTitle={"Saved Credit Card"}
        callBackFunction={toggleDisplayPopup}
        icon={faPlus}
        buttonTitle={"Add a New Credit Card"}
      />
      <CardDetailsPopup
        displayPopup={displayPopup}
        popupCloseHandler={toggleDisplayPopup}
      />
    </>
  );
};
