import { useState, useEffect } from "react";

import { NormalTitle } from "../../../../../reusable/NormalTitle/NormalTitle";

import { useAuthenticationContext } from "../../../../../../contexts/AuthenticationContext";

import { useService } from "../../../../../../hooks/useService";

import { userLoginDetailsServiceFactory } from "../../../../../../services/userLoginDetailsService";

import { useLanguageContext } from "../../../../../../contexts/LanguageContext";

import { EMAIL_ADDRESS_NAMING } from "../../../../../../constants/languageRelated";

import styles from "./UserLoginDetails.module.css";

export const UserLoginDetails = () => {
  const { language } = useLanguageContext();

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
      <NormalTitle title={EMAIL_ADDRESS_NAMING[language]} variant={"bolded"} />
      <NormalTitle title={userLoginDetails.email} variant={"regular"} />
    </section>
  );
};
