import { useState, useEffect } from "react";

import { NormalTitle } from "../../../reusable/NormalTitle/NormalTitle";

import { useLanguageContext } from "../../../../contexts/LanguageContext";
import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

import { useService } from "../../../../hooks/useService";

import { userLoginDetailsServiceFactory } from "../../../../services/userLoginDetailsService";

import { MESSAGE_BY_LANGUAGE } from "./constants/languageRelated";

import styles from "./ConfirmationEmail.module.css";

export const ConfirmationEmail = () => {
  const { language } = useLanguageContext();

  const { userId } = useAuthenticationContext();

  const [userEmail, setUserEmail] = useState(null);

  const userLoginDetailsService = useService(userLoginDetailsServiceFactory);

  useEffect(() => {
    userLoginDetailsService
      .getOne(userId)
      .then((data) => {
        setUserEmail(data.email);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  const message = MESSAGE_BY_LANGUAGE[language];

  return (
    <div className={styles["confirmation-email"]}>
      <div className={styles["bus-thumbnail"]}>
        <img
          className={styles["bus"]}
          src="https://res.cloudinary.com/deztgvefu/image/upload/v1725612070/forget-me-not-collection/miniImages/6320461_qmrgq0.png"
          alt="butterfly"
        />
      </div>
      <div className={styles["title"]}>
        <NormalTitle title={`${message} ${userEmail}`} variant={"bolded"} />
      </div>
    </div>
  );
};
