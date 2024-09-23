import { useState, useEffect, useCallback } from "react";

import { UpdateEmail } from "./UpdateEmail/UpdateEmail";
import { UpdatePassword } from "./UpdatePassword/UpdatePassword";
import { Logout } from "./Logout/Logout";
import { NormalTitle } from "../../../reusable/NormalTitle/NormalTitle";
import { LargeTitle } from "../../../reusable/LargeTitle/LargeTitle";
import { UpdateEmailForm } from "./UpdateEmail/UpdateEmailForm/UpdateEmailForm";
import { UpdatePasswordForm } from "./UpdatePassword/UpdatePasswordForm/UpdatePasswordForm";
import { Button } from "../../../reusable/Button/Button";

import { useLanguageContext } from "../../../../contexts/LanguageContext";
import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

import { useService } from "../../../../hooks/useService";

import { userLoginDetailsServiceFactory } from "../../../../services/userLoginDetailsService";

import { ACCOUNT_MANAGEMENT_NAMING } from "./constants/languageRelated";

import styles from "./AccountManagement.module.css";

export const AccountManagement = () => {
  const { language } = useLanguageContext();

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

  const title = ACCOUNT_MANAGEMENT_NAMING[language];

  return (
    <section className={styles["account-management"]}>
      <LargeTitle title={title} />
      <NormalTitle title={userEmail} variant={"bolded"} />
      <div className={styles["buttons-container"]}>
        <UpdateEmail
          updateEmailClickHandler={updateEmailClickHandler}
          displayUpdateEmail={displayUpdateEmail}
          updateUserEmail={updateUserEmail}
        />
        {/* <UpdatePassword
          updatePasswordClickHandler={updatePasswordClickHandler}
          displayUpdatePassword={displayUpdatePassword}
        /> */}
        <Logout />
      </div>
      {/* {displayUpdateEmail && (
        <div className={styles["update-form"]}>
          <UpdateEmailForm />
        </div>
      )} */}
      {displayUpdatePassword && (
        <div className={styles["update-form"]}>
          <UpdatePasswordForm />
        </div>
      )}
    </section>
  );
};
