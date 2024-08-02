import { useState, useEffect } from "react";

import { Popup } from "../Popup/Popup";
import { UpdateEmailForm } from "./UpdateEmailForm/UpdateEmailForm";
import { UpdatePasswordForm } from "./UpdatePasswordForm/UpdatePasswordForm";
import { UnderlinedButton } from "../UnderlinedButton/UnderlinedButton";
import { LargeTitle } from "../LargeTitle/LargeTitle";
import { SmallTitle } from "../SmallTitle/SmallTitle";
import { Logout } from "./Logout/Logout";

import { useAuthenticationContext } from "../../contexts/AuthenticationContext";

import { useService } from "../../hooks/useService";

import { userServiceFactory } from "../../services/userService";

import styles from "./Account.module.css";

const UpdateEmailButtonTitle = "Update Email Address";
const UpdatePasswordButtonTitle = "Change Password";

const LargeTitleContent = "Account Management";

export const Account = ({ toggleDisplayAccountPopup }) => {
  const [showUpdateEmail, setShowUpdateEmail] = useState(false);
  const [showUpdatePassword, setShowUpdatePassword] = useState(false);

  const { userId } = useAuthenticationContext();

  const [userData, setUserData] = useState([]);

  const userService = useService(userServiceFactory);

  useEffect(() => {
    userService
      .getUserLoginDetails(userId)
      .then((data) => setUserData(data))
      .catch((err) => console.log(err.message));
  }, [userData]);

  const onUpdateEmailClick = async () => {
    setShowUpdateEmail(true);
    setShowUpdatePassword(false);
  };

  const onUpdatePasswordClick = async () => {
    setShowUpdatePassword(true);
    setShowUpdateEmail(false);
  };

  return (
    // <Popup
    //   overlayVariant={"overlay-top"}
    //   modalVariant={"account"}
    //   popupCloseHandler={toggleDisplayAccountPopup}
    // >
      <section className={styles["account-management"]}>
        <LargeTitle title={LargeTitleContent} variant={"large-title"} />
        <SmallTitle title={userData.email} />
        <div className={styles["button-container"]}>
          <UnderlinedButton
            title={UpdateEmailButtonTitle}
            callBackFunction={onUpdateEmailClick}
          />
          <UnderlinedButton
            title={UpdatePasswordButtonTitle}
            callBackFunction={onUpdatePasswordClick}
          />
          <Logout popupCloseHandler={toggleDisplayAccountPopup} />
        </div>
        {showUpdateEmail && <UpdateEmailForm />}
        {showUpdatePassword && <UpdatePasswordForm />}
      </section>
    // </Popup>
  );
};
