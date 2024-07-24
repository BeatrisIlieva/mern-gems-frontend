import styles from "./DeleteAccount.module.css";

import { Popup } from "../../../Popup/Popup";
import { LargeTitle } from "../../../LargeTitle/LargeTitle";
import { SmallTitle } from "../../../SmallTitle/SmallTitle";
import { Button } from "../../../Button/Button";

const LargeTitleContent = "Delete Account";
const SmallTitleContent = "Are you sure you want to delete your Account?";
const GoBackButtonTitle = "Go Back";
const DeleteAccountButtonTitle = "Delete Account";

export const DeleteAccount = ({
  toggleDeleteAccountPopup,
  displayDeleteAccountPopup,
}) => {
  return (
    <>
      {displayDeleteAccountPopup && (
        <Popup
          isVisible
          variant={"delete-account"}
          popupCloseHandler={toggleDeleteAccountPopup}
        >
          <LargeTitle title={LargeTitleContent} />
          <SmallTitle title={SmallTitleContent} />
          <div className={styles["button-wrapper"]}>
            <Button variant={"pink-button"} title={GoBackButtonTitle} />
            <Button variant={"red-button"} title={DeleteAccountButtonTitle} />
          </div>
        </Popup>
      )}
    </>
  );
};
