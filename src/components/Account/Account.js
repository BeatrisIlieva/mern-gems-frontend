import { useState, useEffect } from "react";

import { UpdateEmailForm } from "./UpdateEmailForm/UpdateEmailForm";
import { UpdatePasswordForm } from "./UpdatePasswordForm/UpdatePasswordForm";
import { UnderlinedButton } from "../UnderlinedButton/UnderlinedButton";
import { LargeTitle } from "../LargeTitle/LargeTitle";
import { Logout } from "./Logout/Logout";
import { AddressBookPopup } from "./AddressBookPopup/AddressBookPopup";
import { OrderHistoryPopup } from "./OrderHistoryPopup/OrderHistoryPopup";
import { CardDetailsPopup } from "./CardDetailsPopup/CardDetailsPopup";
import { Icon } from "../Icon/Icon";
import { NormalTitle } from "../NormalTitle/NormalTitle";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";

import { useAuthenticationContext } from "../../contexts/AuthenticationContext";

import { useService } from "../../hooks/useService";

import { userLoginDetailsServiceFactory } from "../../services/userLoginDetailsService";

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
            <LargeTitle title={"Saved Credit Card"} variant={"large-title"} />
          </div>
          <button
            onClick={toggleDisplayCardDetailsPopup}
            className={styles["button-container"]}
          >
            <Icon icon={faPlus} variant={"address-book"} />
            Add a New Credit Card
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
        <div className={styles["right-sub-container"]}>
          <LargeTitle title={LargeTitleContent} variant={"large-title"} />
          <NormalTitle title={userLoginDetails.email} variant={"bolded"} />;
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
