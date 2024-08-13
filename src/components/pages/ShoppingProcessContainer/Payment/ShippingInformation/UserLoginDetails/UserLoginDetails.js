import { useState, useEffect } from "react";

import { NormalTitle } from "../../../../../reusable/NormalTitle/NormalTitle";
import { useAuthenticationContext } from "../../../../../../contexts/AuthenticationContext";

import { useService } from "../../../../../../hooks/useService";

import { userLoginDetailsServiceFactory } from "../../../../../../services/userLoginDetailsService";

import styles from "./UserLoginDetails.module.css";

export const UserLoginDetails = () => {
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
    <section className={styles["user-login-details"]}>
      <NormalTitle title={"Email Address"} variant={"bolded"} />
      <NormalTitle title={userLoginDetails.email} variant={"regular"} />
    </section>
  );
};
