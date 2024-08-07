import { useState } from "react";

import { Button } from "../Button/Button";
import { UpdateEmailForm } from "./UpdateEmailForm/UpdateEmailForm";
import { Popup } from "../../Popup/Popup";

export const UpdateEmail = () => {
  const [displayPopup, setDisplayPopup] = useState(false);

  const toggleDisplayPopup = () => {
    setDisplayPopup((displayPopup) => !displayPopup);
  };

  return (
    <>
      <Button
        title={"Update Email Address"}
        callBackFunction={toggleDisplayPopup}
      />
      {displayPopup && (
        <Popup popupCloseHandler={toggleDisplayPopup} title={"Update Email"}>
          <UpdateEmailForm />
        </Popup>
      )}
    </>
  );
};
