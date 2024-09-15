import { useState } from "react";

import { SectionContainer } from "../reusable/SectionContainer/SectionContainer";
import { ShippingDetailsForm } from "../../../common/ShippingDetailsForm/ShippingDetailsForm";
import { Popup } from "../../../reusable/Popup/Popup";
import { LargeTitle } from "../../../reusable/LargeTitle/LargeTitle";

import { useLanguageContext } from "../../../../contexts/LanguageContext";

import {
  ADDRESS_BOOK_NAMING_NAMING,
  BUTTON_TITLE,
} from "./constants/languageRelated";

import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const ShippingDetails = () => {
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

  const sectionTitle = ADDRESS_BOOK_NAMING_NAMING[language];

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
          <ShippingDetailsForm popupCloseHandler={toggleDisplayPopup} />
        </Popup>
      )}
    </>
  );
};
