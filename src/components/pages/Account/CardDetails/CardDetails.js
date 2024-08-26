import { useState } from "react";

import { LargeTitle } from "../../../reusable/LargeTitle/LargeTitle";
import { SectionContainer } from "../reusable/SectionContainer/SectionContainer";
import { CardDetailsForm } from "../../../common/CardDetailsForm/CardDetailsForm";
import { Popup } from "../../../common/Popup/Popup";

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
        <Popup popupCloseHandler={toggleDisplayPopup} modalVariant={"large"}>
          <LargeTitle title={"Add a New Card"} textAlign={"align-center"} />
          <CardDetailsForm popupCloseHandler={toggleDisplayPopup} />
        </Popup>
      )}
    </>
  );
};
