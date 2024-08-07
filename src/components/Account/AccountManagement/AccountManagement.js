import { useState, useEffect } from "react";

import { UpdateEmail } from "./UpdateEmail/UpdateEmail";
import { UpdatePassword } from "./UpdatePassword/UpdatePassword";
import { Logout } from "./Logout/Logout";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

import { useService } from "../../../hooks/useService";

import { userLoginDetailsServiceFactory } from "../../../services/userLoginDetailsService";

import styles from "./AccountManagement.module.css";

export const AccountManagement = () => {
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

  return (
    <div className={styles["right-sub-container"]}>
      <h3>Account Management</h3>
      <h4>{userLoginDetails.email}</h4>
      <div className={styles["buttons-container"]}>
        <UpdateEmail />
        <UpdatePassword />
        <Logout />
      </div>
    </div>
  );
};
