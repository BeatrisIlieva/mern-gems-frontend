import { useState } from "react";

import { LargeTitle } from "../../../../reusable/LargeTitle/LargeTitle";
import { Button } from "../../../../reusable/Button/Button";
import { UpdateEmailForm } from "./UpdateEmailForm/UpdateEmailForm";
import { Popup } from "../../../../common/Popup/Popup";

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
        variant={"underlined"}
      />
      {displayPopup && (
        <Popup popupCloseHandler={toggleDisplayPopup} modalVariant={"small"}>
          <LargeTitle title={"Update Email"} textAlign={"align-center"} />
          <UpdateEmailForm popupCloseHandler={toggleDisplayPopup}/>
        </Popup>
      )}
    </>
  );
};
