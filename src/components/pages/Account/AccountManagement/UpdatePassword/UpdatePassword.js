import { useState, memo } from "react";

import { LargeTitle } from "../../../../reusable/LargeTitle/LargeTitle";
import { Popup } from "../../../../reusable/Popup/Popup";
import { Button } from "../../../../reusable/Button/Button";
import { UpdatePasswordForm } from "./UpdatePasswordForm/UpdatePasswordForm";

import { FORM_KEYS, INITIAL_FORM_VALUES } from "./constants/initialFormValues";

import { clearInitialFormValuesMessages } from "../../../../../utils/clearInitialFormValuesMessages";

export const UpdatePassword = memo(() => {
  const [displayPopup, setDisplayPopup] = useState(false);

  const toggleDisplayPopup = () => {
    setDisplayPopup((displayPopup) => !displayPopup);

    clearInitialFormValuesMessages(FORM_KEYS, INITIAL_FORM_VALUES);
  };

  return (
    <>
      <Button
        title={"Change Password"}
        callBackFunction={toggleDisplayPopup}
        variant={"underlined"}
      />
      {displayPopup && (
        <Popup        displayPopup={displayPopup} popupCloseHandler={toggleDisplayPopup} modalVariant={"small"}>
          <LargeTitle title={"Change Password"} textAlign={"align-center"} />
          <UpdatePasswordForm popupCloseHandler={toggleDisplayPopup} />
        </Popup>
      )}
    </>
  );
});
