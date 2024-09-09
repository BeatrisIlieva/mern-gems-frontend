import { useState, memo } from "react";

import { LargeTitle } from "../../../../reusable/LargeTitle/LargeTitle";
import { Button } from "../../../../reusable/Button/Button";
import { UpdateEmailForm } from "./UpdateEmailForm/UpdateEmailForm";
import { Popup } from "../../../../reusable/Popup/Popup";

import { clearInitialFormValuesMessages } from "../../../../../utils/clearInitialFormValuesMessages";

import { FORM_KEYS, INITIAL_FORM_VALUES } from "./constants/initialFormValues";

export const UpdateEmail = memo(() => {
  const [displayPopup, setDisplayPopup] = useState(false);

  const toggleDisplayPopup = () => {
    setDisplayPopup((displayPopup) => !displayPopup);

    clearInitialFormValuesMessages(FORM_KEYS, INITIAL_FORM_VALUES);
  };

  return (
    <>
      <Button
        title={"Update Email Address"}
        callBackFunction={toggleDisplayPopup}
        variant={"underlined"}
      />
      {displayPopup && (
        <Popup popupCloseHandler={toggleDisplayPopup} modalVariant={"small"}>
          <LargeTitle title={"Update Email"} textAlign={"align-center"} />
          <UpdateEmailForm popupCloseHandler={toggleDisplayPopup} />
        </Popup>
      )}
    </>
  );
});
