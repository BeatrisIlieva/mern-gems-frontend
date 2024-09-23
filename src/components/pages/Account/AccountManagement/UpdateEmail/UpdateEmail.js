import { useState, memo } from "react";

import { Button } from "../../../../reusable/Button/Button";
import { UpdateEmailForm } from "./UpdateEmailForm/UpdateEmailForm";

import { useLanguageContext } from "../../../../../contexts/LanguageContext";

import { clearInitialFormValuesMessages } from "../../../../../utils/clearInitialFormValuesMessages";

import { TITLE_NAMING } from "./constants/languageRelated";
import { FORM_KEYS, INITIAL_FORM_VALUES } from "./constants/initialFormValues";

import styles from "./UpdateEmail.module.css";

export const UpdateEmail = memo(
  ({ updateEmailClickHandler, displayUpdateEmail, updateUserEmail }) => {
    const { language } = useLanguageContext();

    const [displayPopup, setDisplayPopup] = useState(false);

    const [movePopup, setMovePopup] = useState(false);

    const toggleDisplayPopup = () => {
      setMovePopup(true);

      setTimeout(async () => {
        setDisplayPopup((displayPopup) => !displayPopup);

        updateEmailClickHandler();

        clearInitialFormValuesMessages(FORM_KEYS, INITIAL_FORM_VALUES);
        setMovePopup(false);
      }, 400);
    };

    const title = TITLE_NAMING[language];

    return (
      <div className={styles["update-form"]}>
        <Button
          title={title}
          callBackFunction={toggleDisplayPopup}
          variant={"underlined"}
        />
        {displayUpdateEmail && (
          <div className={styles["update-form"]}>
            <UpdateEmailForm updateUserEmail={updateUserEmail} />
          </div>
        )}
      </div>
    );
  }
);
