import { useState, useEffect } from "react";

import { useService } from "../../../hooks/useService";

import { userLoginDetailsServiceFactory } from "../../../services/userLoginDetailsService";

import { UpdateEmail } from "./UpdateEmail/UpdateEmail";

export const AccountManagement = () => {
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

  const onUpdatePasswordClick = async () => {
    setShowUpdatePassword(true);
    setShowUpdateEmail(false);
  };

  return (
    <div className={styles["right-sub-container"]}>
      <LargeTitle title={"Account Management"} variant={"large-title"} />
      <NormalTitle title={userLoginDetails.email} variant={"bolded"} />
      <div className={styles["buttons-container"]}>
        <UpdateEmail />
        <UnderlinedButton
          title={"Change Password"}
          callBackFunction={onUpdatePasswordClick}
        />
        <Logout />
      </div>

      {showUpdatePassword && <UpdatePasswordForm />}
    </div>
  );
};
