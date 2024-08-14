import { NormalTitle } from "../../../../reusable/NormalTitle/NormalTitle";

import { useUserLoginDetails } from "../../../../../hooks/useUserLoginDetails";

import styles from "./UserLoginDetails.module.css";

export const UserLoginDetails = () => {
  const { email } = useUserLoginDetails();

  return (
    <section className={styles["user-login-details"]}>
      <NormalTitle title={"Email Address"} variant={"bolded"} />
      <NormalTitle title={email} variant={"regular"} />
    </section>
  );
};
