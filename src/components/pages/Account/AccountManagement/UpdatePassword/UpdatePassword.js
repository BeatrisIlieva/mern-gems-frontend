import { useState, memo } from "react";

import { LargeTitle } from "../../../../reusable/LargeTitle/LargeTitle";
import { Popup } from "../../../../reusable/Popup/Popup";
import { Button } from "../../../../reusable/Button/Button";
import { UpdatePasswordForm } from "./UpdatePasswordForm/UpdatePasswordForm";

import { useLanguageContext } from "../../../../../contexts/LanguageContext";

import { TITLE_NAMING } from "./constants/languageRelated";
import { FORM_KEYS, INITIAL_FORM_VALUES } from "./constants/initialFormValues";

import { clearInitialFormValuesMessages } from "../../../../../utils/clearInitialFormValuesMessages";

export const UpdatePassword = memo(
  ({ updatePasswordClickHandler, displayUpdatePassword }) => {
    const { language } = useLanguageContext();

    const [displayPopup, setDisplayPopup] = useState(false);

    const [movePopup, setMovePopup] = useState(false);

    const toggleDisplayPopup = () => {
      setMovePopup(true);

      setTimeout(async () => {
        setDisplayPopup((displayPopup) => !displayPopup);

        updatePasswordClickHandler();

        clearInitialFormValuesMessages(FORM_KEYS, INITIAL_FORM_VALUES);
        setMovePopup(false);
      }, 400);
    };

    const title = TITLE_NAMING[language];

    return (
      <>
        <Button
          title={title}
          callBackFunction={toggleDisplayPopup}
          variant={"underlined"}
        />
        {displayUpdatePassword && (
          <UpdatePasswordForm popupCloseHandler={toggleDisplayPopup} />
        )}
      </>
    );
  }
);
