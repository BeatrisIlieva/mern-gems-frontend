import { useState } from "react";

import { UpdateEmail } from "./UpdateEmail/UpdateEmail";
import { UpdatePassword } from "./UpdatePassword/UpdatePassword";
import { Logout } from "./Logout/Logout";
import { NormalTitle } from "../../../reusable/NormalTitle/NormalTitle";
import { LargeTitle } from "../../../reusable/LargeTitle/LargeTitle";

import { useUserLoginDetails } from "../../../../hooks/useUserLoginDetails";

import styles from "./AccountManagement.module.css";

export const AccountManagement = () => {
  const { email } = useUserLoginDetails();

  const [displayUpdateEmail, setDisplayUpdateEmailForm] = useState(false);

  const [displayUpdatePassword, setDisplayUpdatePasswordForm] = useState(false);

  const updateEmailClickHandler = () => {
    setDisplayUpdateEmailForm(true);
    setDisplayUpdatePasswordForm(false);
  };

  const updatePasswordClickHandler = () => {
    setDisplayUpdatePasswordForm(true);
    setDisplayUpdateEmailForm(false);
  };

  return (
    <section className={styles["account-management"]}>
      <div className={styles["wrapper"]}>
        <LargeTitle title={"Account Management"} />
        <NormalTitle title={email} variant={"bolded"} />
      </div>
      <div className={styles["buttons-container"]}>
        <UpdateEmail
          updateEmailClickHandler={updateEmailClickHandler}
          displayUpdateEmail={displayUpdateEmail}
        />
        <UpdatePassword
          updatePasswordClickHandler={updatePasswordClickHandler}
          displayUpdatePassword={displayUpdatePassword}
        />
        <Logout />
      </div>
    </section>
  );
};
