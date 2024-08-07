import { useState } from "react";

import { SectionContainer } from "../SectionContainer/SectionContainer";
import { CardDetailsPopup } from "./CardDetailsPopup/CardDetailsPopup";
import { CardDetailsForm } from "./CardDetailsPopup/CardDetailsForm/CardDetailsForm";

import { Popup } from "../Popup/Popup";
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
      {displayPopup && (
        <Popup popupCloseHandler={toggleDisplayPopup} title={"Update Email"}>
          <CardDetailsForm />
        </Popup>
      )}
      {/* <CardDetailsPopup
        displayPopup={displayPopup}
        popupCloseHandler={toggleDisplayPopup}
      /> */}
    </>
  );
};
