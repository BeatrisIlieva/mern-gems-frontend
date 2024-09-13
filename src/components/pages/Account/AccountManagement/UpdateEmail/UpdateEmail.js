import { useState, memo } from "react";

import { LargeTitle } from "../../../../reusable/LargeTitle/LargeTitle";
import { Button } from "../../../../reusable/Button/Button";
import { UpdateEmailForm } from "./UpdateEmailForm/UpdateEmailForm";
import { Popup } from "../../../../reusable/Popup/Popup";

import { useLanguageContext } from "../../../../../contexts/LanguageContext";

import { clearInitialFormValuesMessages } from "../../../../../utils/clearInitialFormValuesMessages";

import { TITLE_NAMING } from "./constants/languageRelated";
import { FORM_KEYS, INITIAL_FORM_VALUES } from "./constants/initialFormValues";

export const UpdateEmail = memo(({ updateUserEmail }) => {
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
          <UpdateEmailForm
            popupCloseHandler={toggleDisplayPopup}
            updateUserEmail={updateUserEmail}
          />
        </Popup>
      )}
    </>
  );
});
