import { useNavigate } from "react-router-dom";

import styles from "./DeleteAccount.module.css";

import { Popup } from "../../Popup/Popup";
import { LargeTitle } from "../../LargeTitle/LargeTitle";
import { SmallTitle } from "../../SmallTitle/SmallTitle";
import { Button } from "../../Button/Button";

import { useService } from "../../../hooks/useService";
import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";
import { userServiceFactory } from "../../../services/userService";

const LargeTitleContent = "Delete Account";
const SmallTitleContent = "Are you sure you want to delete your Account?";
const GoBackButtonTitle = "Go Back";
const DeleteAccountButtonTitle = "Delete Account";

export const DeleteAccount = ({ toggleDeleteAccountPopup }) => {
  const { userId, clearToken } = useAuthenticationContext();
  const userService = useService(userServiceFactory);

  const navigate = useNavigate();

  const deleteHandler = async () => {
    navigate("/");

    await userService.delete(userId);

    await clearToken();
  };

  return (
    <Popup
      isVisible
      variant={"delete-account"}
      popupCloseHandler={toggleDeleteAccountPopup}
    >
      <LargeTitle title={LargeTitleContent} />
      <SmallTitle title={SmallTitleContent} />
      <div className={styles["button-wrapper"]}>
        <Button
          variant={"pink-button"}
          title={GoBackButtonTitle}
          callBackFunction={toggleDeleteAccountPopup}
        />
        <Button
          variant={"red-button"}
          title={DeleteAccountButtonTitle}
          callBackFunction={deleteHandler}
        />
      </div>
    </Popup>
  );
};
