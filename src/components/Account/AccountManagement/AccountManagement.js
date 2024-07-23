import { useState } from "react";

import { UpdateEmailForm } from "./UpdateEmailForm/UpdateEmailForm";

import styles from "./AccountManagement.module.css";

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
      <div className={styles["button-container"]}>
        <button
          className={styles["button"]}
          onClick={() => onUpdateEmailClick()}
          data-testid="update-email-button"
        >
          Update Email Address
        </button>
        <button
          className={styles["button"]}
          onClick={() => onUpdatePasswordClick()}
          data-testid="update-password-button"
        >
          Change Password
        </button>
      </div>
      <div className={styles["slideIn"]}>
        <UpdateEmailForm />
      </div>
    </section>
  );
};
