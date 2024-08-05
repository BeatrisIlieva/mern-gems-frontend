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

import { Icon } from "../Icon/Icon";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "./Account.module.css";

import { OrderHistoryPopup } from "./OrderHistoryPopup/OrderHistoryPopup";

export const Account = () => {
  const [showUpdateEmail, setShowUpdateEmail] = useState(false);
  const [showUpdatePassword, setShowUpdatePassword] = useState(false);
  const [displayOrderHistoryPopup, setDisplayOrderHistoryPopup] =
    useState(false);

  const [userLoginDetails, setUserLoginDetails] = useState([]);

  const { userId } = useAuthenticationContext();

  const userLoginDetailsService = useService(userLoginDetailsServiceFactory);

  const toggleDisplayOrderHistoryPopup = () => {
    setDisplayOrderHistoryPopup(
      (displayOrderHistoryPopup) => !displayOrderHistoryPopup
    );
  };

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
          <div className={styles["title"]}>
            <LargeTitle title={"Order History"} variant={"large-title"} />
          </div>
          <button
            onClick={toggleDisplayOrderHistoryPopup}
            className={styles["button-container"]}
          >
            <Icon icon={faClockRotateLeft} variant={"address-book"} />
            View Order History
          </button>
        </div>
      </div>
      <div className={styles["right-container"]}>
        <div className={styles["right-sub-container"]}>
          <LargeTitle title={"Account Management"} variant={"large-title"} />
          <NormalTitle title={userLoginDetails.email} variant={"bolded"} />
          <div className={styles["buttons-container"]}>
            <UnderlinedButton
              title={"Update Email Address"}
              callBackFunction={onUpdateEmailClick}
            />
            <UnderlinedButton
              title={"Change Password"}
              callBackFunction={onUpdatePasswordClick}
            />
            <Logout />
          </div>
          {showUpdateEmail && <UpdateEmailForm />}
          {showUpdatePassword && <UpdatePasswordForm />}
        </div>
      </div>
      {displayOrderHistoryPopup && (
        <OrderHistoryPopup
          toggleDisplayOrderHistoryPopup={toggleDisplayOrderHistoryPopup}
        />
      )}
    </section>
  );
};
