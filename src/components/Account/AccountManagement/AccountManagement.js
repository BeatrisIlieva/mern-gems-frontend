import { useState } from "react";

import { UpdateEmailForm } from "./UpdateEmailForm/UpdateEmailForm";
import { UpdatePasswordForm } from "./UpdatePasswordForm/UpdatePasswordForm";
import { Button } from "./Button/Button";
import { LargeTitle } from "../../LargeTitle/LargeTitle";

import styles from "./AccountManagement.module.css";

const UpdateEmailButtonTitle = "Update Email Address";
const UpdatePasswordButtonTitle = "Change Password";

const Title = "Account Management";

export const AccountManagement = () => {
  const [showUpdateEmail, setShowUpdateEmail] = useState(false);
  const [showUpdatePassword, setShowUpdatePassword] = useState(false);

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
      <LargeTitle title={Title} />
      <div className={styles["button-container"]}>
        <Button
          title={UpdateEmailButtonTitle}
          callbackFunction={onUpdateEmailClick}
        />
        <Button
          title={UpdatePasswordButtonTitle}
          callbackFunction={onUpdatePasswordClick}
        />
      </div>

      {showUpdateEmail && <UpdateEmailForm />}

      {showUpdatePassword && <UpdatePasswordForm />}
    </section>
  );
};
