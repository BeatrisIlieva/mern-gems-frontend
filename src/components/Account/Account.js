import { useState } from "react";

import { UpdateEmailForm } from "./UpdateEmailForm/UpdateEmailForm";
import { UpdatePasswordForm } from "./UpdatePasswordForm/UpdatePasswordForm";
import { UnderlinedButton } from "../UnderlinedButton/UnderlinedButton";
import { LargeTitle } from "../LargeTitle/LargeTitle";
import { Logout } from "./Logout/Logout";
import { AddressBookPopup } from "./AddressBookPopup/AddressBookPopup";
import { OrderHistoryPopup } from "./OrderHistoryPopup/OrderHistoryPopup";
import { CardDetailsPopup } from "./CardDetailsPopup/CardDetailsPopup";
import { Icon } from "../Icon/Icon";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";

import { UserEmail } from "../UserEmail/UserEmail";

import styles from "./Account.module.css";

const UpdateEmailButtonTitle = "Update Email Address";
const UpdatePasswordButtonTitle = "Change Password";

const LargeTitleContent = "Account Management";

export const Account = () => {
  const [showUpdateEmail, setShowUpdateEmail] = useState(false);
  const [showUpdatePassword, setShowUpdatePassword] = useState(false);
  const [displayAddressBookPopup, setDisplayAddressBookPopup] = useState(false);
  const [displayCardDetailsPopup, setDisplayCardDetailsPopup] = useState(false);
  const [displayOrderHistoryPopup, setDisplayOrderHistoryPopup] =
    useState(false);

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

  const toggleDisplayCardDetailsPopup = () => {
    setDisplayCardDetailsPopup(
      (displayCardDetailsPopup) => !displayCardDetailsPopup
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
        <div className={styles["left-sub-container"]}>
          <div className={styles["title"]}>
            <LargeTitle title={"Card Details"} variant={"large-title"} />
          </div>
          <button
            onClick={toggleDisplayCardDetailsPopup}
            className={styles["button-container"]}
          >
            <Icon icon={faPlus} variant={"address-book"} />
            Card Details
          </button>
        </div>
      </div>
      <div className={styles["right-container"]}>
        <LargeTitle title={LargeTitleContent} variant={"large-title"} />
        <UserEmail />
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
      {displayCardDetailsPopup && (
        <CardDetailsPopup
          toggleDisplayCardDetailsPopup={toggleDisplayCardDetailsPopup}
        />
      )}
    </section>
  );
};
