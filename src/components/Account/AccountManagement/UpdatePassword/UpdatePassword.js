import { useState } from "react";

import { Popup } from "../../../reusable/Popup/Popup";
import { Button } from "../../../reusable/Button/Button";
import { UpdatePasswordForm } from "./UpdatePasswordForm/UpdatePasswordForm";

export const UpdatePassword = () => {
  const [displayPopup, setDisplayPopup] = useState(false);

  const toggleDisplayPopup = () => {
    setDisplayPopup((displayPopup) => !displayPopup);
  };

  return (
    <>
      <Button
        title={"Change Password"}
        callBackFunction={toggleDisplayPopup}
        variant={"underlined"}
      />
      {displayPopup && (
        <Popup
          popupCloseHandler={toggleDisplayPopup}
          title={"Change Password"}
          variant={"small"}
        >
          <UpdatePasswordForm />
        </Popup>
      )}
    </>
  );
};
