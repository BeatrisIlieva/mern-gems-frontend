import { useState, useEffect } from "react";

import { UpdateEmailForm } from "./UpdateEmailForm/UpdateEmailForm";
import { UpdatePasswordForm } from "./UpdatePasswordForm/UpdatePasswordForm";
import { UnderlinedButton } from "../UnderlinedButton/UnderlinedButton";
import { LargeTitle } from "../LargeTitle/LargeTitle";
import { Logout } from "./Logout/Logout";
import { AddressBookPopup } from "./AddressBookPopup/AddressBookPopup";
import { OrderHistoryPopup } from "./OrderHistoryPopup/OrderHistoryPopup";
import { Icon } from "../Icon/Icon";

import { NormalTitle } from "../NormalTitle/NormalTitle";

import { useAuthenticationContext } from "../../contexts/AuthenticationContext";

import { useService } from "../../hooks/useService";

import { userServiceFactory } from "../../services/userService";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "./Account.module.css";

const UpdateEmailButtonTitle = "Update Email Address";
const UpdatePasswordButtonTitle = "Change Password";

const LargeTitleContent = "Account Management";

export const Account = () => {
  const [showUpdateEmail, setShowUpdateEmail] = useState(false);
  const [showUpdatePassword, setShowUpdatePassword] = useState(false);
  const [displayAddressBookPopup, setDisplayAddressBookPopup] = useState(false);
  const [displayOrderHistoryPopup, setDisplayOrderHistoryPopup] =
    useState(false);

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

  const toggleDisplayAddressBookPopup = () => {
    setDisplayAddressBookPopup(
      (displayAddressBookPopup) => !displayAddressBookPopup
    );
  };

  const toggleDisplayOrderHistoryPopup = () => {
    setDisplayOrderHistoryPopup(
      (displayOrderHistoryPopup) => !displayOrderHistoryPopup
    );
  };

  return (
    <section className={styles["account"]}>
      <div className={styles["left-container"]}>
        <div className={styles["left-sub-container"]}>
          <div className={styles["title"]}>
            <LargeTitle title={"Address Book"} variant={"large-title"} />
          </div>
          <button
            onClick={toggleDisplayAddressBookPopup}
            className={styles["button-container"]}
          >
            <Icon icon={faPlus} variant={"address-book"} />
            Add a New Address
          </button>
        </div>
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
        <LargeTitle title={LargeTitleContent} variant={"large-title"} />
        <NormalTitle title={userData.email} variant={"bolded"} />
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
      {displayAddressBookPopup && (
        <AddressBookPopup
          toggleDisplayAddressBookPopup={toggleDisplayAddressBookPopup}
        />
      )}
      {displayOrderHistoryPopup && (
        <OrderHistoryPopup
          toggleDisplayOrderHistoryPopup={toggleDisplayOrderHistoryPopup}
        />
      )}
    </section>
  );
};
