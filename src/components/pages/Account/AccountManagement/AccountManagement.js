import { useState, useEffect, useCallback } from "react";

import { UpdateEmail } from "./UpdateEmail/UpdateEmail";
import { UpdatePassword } from "./UpdatePassword/UpdatePassword";
import { Logout } from "./Logout/Logout";
import { NormalTitle } from "../../../reusable/NormalTitle/NormalTitle";
import { LargeTitle } from "../../../reusable/LargeTitle/LargeTitle";

import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

import { useService } from "../../../../hooks/useService";

import { userLoginDetailsServiceFactory } from "../../../../services/userLoginDetailsService";

import styles from "./AccountManagement.module.css";

export const AccountManagement = () => {
  const [userLoginDetails, setUserLoginDetails] = useState([]);

  const [userEmail, setUserEmail] = useState([]);

  const updateUserEmail = useCallback((email) => {
    setUserEmail(email);
  }, []);

  const { userId } = useAuthenticationContext();

  const userLoginDetailsService = useService(userLoginDetailsServiceFactory);

  useEffect(() => {
    userLoginDetailsService
      .getOne(userId)
      .then((data) => {
        setUserEmail(data.email);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userLoginDetailsService, userId]);

  const [displayUpdateEmail, setDisplayUpdateEmailForm] = useState(false);

  const [displayUpdatePassword, setDisplayUpdatePasswordForm] = useState(false);

  const updateEmailClickHandler = useCallback(() => {
    setDisplayUpdateEmailForm(true);
    setDisplayUpdatePasswordForm(false);
  }, []);

  const updatePasswordClickHandler = useCallback(() => {
    setDisplayUpdatePasswordForm(true);
    setDisplayUpdateEmailForm(false);
  }, []);

  return (
    <section className={styles["account-management"]}>
      <LargeTitle title={"Account Management"} />
      <NormalTitle title={userEmail} variant={"bolded"} />
      <div className={styles["buttons-container"]}>
        <UpdateEmail
          updateEmailClickHandler={updateEmailClickHandler}
          displayUpdateEmail={displayUpdateEmail}
          updateUserEmail={updateUserEmail}
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
