import { useState, useEffect } from "react";

import { UpdateEmailForm } from "./UpdateEmailForm/UpdateEmailForm";
import { UpdatePasswordForm } from "./UpdatePasswordForm/UpdatePasswordForm";
import { UnderlinedButton } from "../UnderlinedButton/UnderlinedButton";
import { LargeTitle } from "../LargeTitle/LargeTitle";
import { SmallTitle } from "../SmallTitle/SmallTitle";
import { Logout } from "./Logout/Logout";
import { AddressBookPopup } from "./AddressBookPopup/AddressBookPopup";

import { useAuthenticationContext } from "../../contexts/AuthenticationContext";

import { useService } from "../../hooks/useService";

import { userServiceFactory } from "../../services/userService";

import styles from "./Account.module.css";

const UpdateEmailButtonTitle = "Update Email Address";
const UpdatePasswordButtonTitle = "Change Password";

const LargeTitleContent = "Account Management";

export const Account = () => {
  const [showUpdateEmail, setShowUpdateEmail] = useState(false);
  const [showUpdatePassword, setShowUpdatePassword] = useState(false);
  const [displayAddressBookPopup, setDisplayAddressBookPopup] = useState(false);

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

  return (
    <section className={styles["account"]}>
      <div className={styles["left-container"]}>
        <button onClick={toggleDisplayAddressBookPopup}>address book</button>
      </div>
      <div className={styles["right-container"]}>
        <LargeTitle title={LargeTitleContent} variant={"large-title"} />
        <SmallTitle title={userData.email} />
        <div className={styles["button-container"]}>
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
    </section>
  );
};
