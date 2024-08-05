import { useState, useEffect } from "react";

import { UpdateEmailForm } from "./UpdateEmailForm/UpdateEmailForm";
import { UpdatePasswordForm } from "./UpdatePasswordForm/UpdatePasswordForm";
import { UnderlinedButton } from "../UnderlinedButton/UnderlinedButton";
import { LargeTitle } from "../LargeTitle/LargeTitle";
import { Logout } from "./Logout/Logout";

import { NormalTitle } from "../NormalTitle/NormalTitle";

import { useAuthenticationContext } from "../../contexts/AuthenticationContext";

import { useService } from "../../hooks/useService";

import { userLoginDetailsServiceFactory } from "../../services/userLoginDetailsService";

import styles from "./Account.module.css";

import { OrderHistory } from "./OrderHistory/OrderHistory";

const UpdateEmailButtonTitle = "Update Email Address";
const UpdatePasswordButtonTitle = "Change Password";

const LargeTitleContent = "Account Management";

export const Account = () => {
  const [showUpdateEmail, setShowUpdateEmail] = useState(false);
  const [showUpdatePassword, setShowUpdatePassword] = useState(false);

  const [userLoginDetails, setUserLoginDetails] = useState([]);

  const { userId } = useAuthenticationContext();

  const userLoginDetailsService = useService(userLoginDetailsServiceFactory);

  useEffect(() => {
    userLoginDetailsService
      .getOne(userId)
      .then((data) => {
        setUserLoginDetails(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userLoginDetailsService, userId]);

  const onUpdateEmailClick = async () => {
    setShowUpdateEmail(true);
    setShowUpdatePassword(false);
  };

  const onUpdatePasswordClick = async () => {
    setShowUpdatePassword(true);
    setShowUpdateEmail(false);
  };

  return (
    <section className={styles["account"]}>
      <div className={styles["left-container"]}>
        <div className={styles["left-sub-container"]}>
        <LargeTitle title={"Orders History"} variant={"large-title"} />
          <OrderHistory />
        </div>
      </div>
      <div className={styles["right-container"]}>
        <div className={styles["right-sub-container"]}>
          <LargeTitle title={LargeTitleContent} variant={"large-title"} />
          <NormalTitle title={userLoginDetails.email} variant={"bolded"} />
          <div className={styles["buttons-container"]}>
            <UnderlinedButton
              title={UpdateEmailButtonTitle}
              callBackFunction={onUpdateEmailClick}
            />
            <UnderlinedButton
              title={UpdatePasswordButtonTitle}
              callBackFunction={onUpdatePasswordClick}
            />
            <Logout />
          </div>
          {showUpdateEmail && <UpdateEmailForm />}
          {showUpdatePassword && <UpdatePasswordForm />}
        </div>
      </div>
    </section>
  );
};
