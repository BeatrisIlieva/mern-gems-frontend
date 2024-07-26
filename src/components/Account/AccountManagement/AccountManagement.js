import { useState, useEffect } from "react";

import { UpdateEmailForm } from "./UpdateEmailForm/UpdateEmailForm";
import { UpdatePasswordForm } from "./UpdatePasswordForm/UpdatePasswordForm";
import { Button } from "./Button/Button";
import { LargeTitle } from "../../LargeTitle/LargeTitle";
import { SmallTitle } from "../../SmallTitle/SmallTitle";
import { Logout } from "./Logout/Logout";
import { DeleteAccount } from "./DeleteAccount/DeleteAccount";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

import { useService } from "../../../hooks/useService";

import { userServiceFactory } from "../../../services/userService";

import styles from "./AccountManagement.module.css";

const UpdateEmailButtonTitle = "Update Email Address";
const UpdatePasswordButtonTitle = "Change Password";
const DeleteAccountButtonTitle = "Delete Account";

const LargeTitleContent = "Account Management";

export const AccountManagement = () => {
  const [showUpdateEmail, setShowUpdateEmail] = useState(false);
  const [showUpdatePassword, setShowUpdatePassword] = useState(false);

  const { userId } = useAuthenticationContext();

  const [userData, setUserData] = useState([]);

  const userService = useService(userServiceFactory);

  useEffect(() => {
    userService
      .getUser(userId)
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
  const [displayDeleteAccountPopup, setDeleteAccountPopup] = useState(false);

  const toggleDeleteAccountPopup = () => {

    setDeleteAccountPopup(
      (displayDeleteAccountPopup) => !displayDeleteAccountPopup
    );
  };

  return (
    <section className={styles["account-management"]}>
      <LargeTitle title={LargeTitleContent} variant={"large-title"}/>
      <SmallTitle title={userData.email} />
      <div className={styles["button-container"]}>
        <Button
          title={UpdateEmailButtonTitle}
          callbackFunction={onUpdateEmailClick}
        />
        <Button
          title={UpdatePasswordButtonTitle}
          callbackFunction={onUpdatePasswordClick}
        />
        <Logout />
        <Button
          title={DeleteAccountButtonTitle}
          callbackFunction={toggleDeleteAccountPopup}
        />
        {displayDeleteAccountPopup && (
          <DeleteAccount
            toggleDeleteAccountPopup={toggleDeleteAccountPopup}
            displayDeleteAccountPopup={displayDeleteAccountPopup}
          />
        )}
      </div>
      {showUpdateEmail && <UpdateEmailForm />}
      {showUpdatePassword && <UpdatePasswordForm />}
    </section>
  );
};
