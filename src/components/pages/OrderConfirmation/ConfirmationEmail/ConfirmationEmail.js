import { useState, useEffect } from "react";

import { NormalTitle } from "../../../reusable/NormalTitle/NormalTitle";

import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

import { useService } from "../../../../hooks/useService";

import { userLoginDetailsServiceFactory } from "../../../../services/userLoginDetailsService";

import styles from "./ConfirmationEmail.module.css";

export const ConfirmationEmail = () => {
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
        <NormalTitle
          title={`A confirmation email has been sent to ${userEmail}`}
          variant={"bolded"}
        />
      </div>
    </div>
  );
};
