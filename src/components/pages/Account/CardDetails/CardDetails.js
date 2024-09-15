import { useState } from "react";

import { LargeTitle } from "../../../reusable/LargeTitle/LargeTitle";
import { SectionContainer } from "../reusable/SectionContainer/SectionContainer";
import { CardDetailsForm } from "../../../common/CardDetailsForm/CardDetailsForm";
import { Popup } from "../../../reusable/Popup/Popup";

import { useLanguageContext } from "../../../../contexts/LanguageContext";

import {
  SAVED_CREDIT_CARD_NAMING_NAMING,
  BUTTON_TITLE,
} from "./constants/languageRelated";

import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const CardDetails = () => {
  const { language } = useLanguageContext();

  const [displayPopup, setDisplayPopup] = useState(false);

  const [movePopup, setMovePopup] = useState(false);

  const toggleDisplayPopup = () => {
    setMovePopup(true);

    setTimeout(async () => {
      setDisplayPopup((displayPopup) => !displayPopup);
      setMovePopup(false);
    }, 400);
  };

  const sectionTitle = SAVED_CREDIT_CARD_NAMING_NAMING[language];

  const buttonTitle = BUTTON_TITLE[language];

  return (
    <>
      <SectionContainer
        sectionTitle={sectionTitle}
        callBackFunction={toggleDisplayPopup}
        icon={faPlus}
        buttonTitle={buttonTitle}
      />
      {displayPopup && (
        <Popup
          movePopup={movePopup}
          displayPopup={displayPopup}
          toggleDisplayPopup={toggleDisplayPopup}
          modalVariant={"large"}
        >
          <LargeTitle title={sectionTitle} textAlign={"align-center"} />
          <CardDetailsForm popupCloseHandler={toggleDisplayPopup} />
        </Popup>
      )}
    </>
  );
};
