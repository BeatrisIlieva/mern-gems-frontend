import { useState, memo } from "react";

import { LargeTitle } from "../../../../reusable/LargeTitle/LargeTitle";
import { Popup } from "../../../../reusable/Popup/Popup";
import { Button } from "../../../../reusable/Button/Button";
import { UpdatePasswordForm } from "./UpdatePasswordForm/UpdatePasswordForm";

import { useLanguageContext } from "../../../../../contexts/LanguageContext";

import { TITLE_NAMING } from "./constants/languageRelated";
import { FORM_KEYS, INITIAL_FORM_VALUES } from "./constants/initialFormValues";

import { clearInitialFormValuesMessages } from "../../../../../utils/clearInitialFormValuesMessages";

export const UpdatePassword = memo(() => {
  const { language } = useLanguageContext();

  const [displayPopup, setDisplayPopup] = useState(false);

  const toggleDisplayPopup = () => {
    setDisplayPopup((displayPopup) => !displayPopup);

    clearInitialFormValuesMessages(FORM_KEYS, INITIAL_FORM_VALUES);
  };

  const title = TITLE_NAMING[language];

  return (
    <>
      <Button
        title={title}
        callBackFunction={toggleDisplayPopup}
        variant={"underlined"}
      />
      {displayPopup && (
        <Popup
          displayPopup={displayPopup}
          toggleDisplayPopup={toggleDisplayPopup}
          modalVariant={"small"}
        >
          <LargeTitle title={title} textAlign={"align-center"} />
          <UpdatePasswordForm popupCloseHandler={toggleDisplayPopup} />
        </Popup>
      )}
    </>
  );
});
