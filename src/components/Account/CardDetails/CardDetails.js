import { useState } from "react";

import { SectionContainer } from "../SectionContainer/SectionContainer";
import { CardDetailsForm } from "../../CardDetailsForm/CardDetailsForm";
import { Popup } from "../../reusable/Popup/Popup";

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
        <Popup
          popupCloseHandler={toggleDisplayPopup}
          title={"Add a New Card"}
          variant={"large"}
        >
          <CardDetailsForm popupCloseHandler={toggleDisplayPopup} />
        </Popup>
      )}
    </>
  );
};
