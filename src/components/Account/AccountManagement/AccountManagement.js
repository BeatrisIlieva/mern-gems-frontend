import { useState, useEffect } from "react";

import { UpdateEmailForm } from "./UpdateEmailForm/UpdateEmailForm";
import { UpdatePasswordForm } from "./UpdatePasswordForm/UpdatePasswordForm";
import { Button } from "./Button/Button";
import { LargeTitle } from "../../LargeTitle/LargeTitle";
import { SmallTitle } from "../../SmallTitle/SmallTitle";
import { Logout } from "./Logout/Logout";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

import { useService } from "../../../hooks/useService";

import { userServiceFactory } from "../../../services/userService";

import styles from "./AccountManagement.module.css";

const UpdateEmailButtonTitle = "Update Email Address";
const UpdatePasswordButtonTitle = "Change Password";

const LargeTitleContent = "Account Management";
const SmallTitleContent = "Email Address";

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

  return (
    <section className={styles["account-management"]}>
      <LargeTitle title={LargeTitleContent} />
      <SmallTitle title={SmallTitleContent} />
      <div>{userData.email}</div>
      <div className={styles["button-container"]}>
        <Button
          title={UpdateEmailButtonTitle}
          callbackFunction={onUpdateEmailClick}
        />
        <Button
          title={UpdatePasswordButtonTitle}
          callbackFunction={onUpdatePasswordClick}
        />
        <Logout/>
      </div>

      {showUpdateEmail && <UpdateEmailForm />}

      {showUpdatePassword && <UpdatePasswordForm />}
    </section>
  );
};
