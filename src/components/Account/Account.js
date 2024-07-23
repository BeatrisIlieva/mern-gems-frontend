import { AccountManagement } from "./AccountManagement/AccountManagement";

import styles from "./Account.module.css";

export const Account = () => {
  return (
    <section className={styles["account"]}>
      <div className={styles["left-container"]}>
        <AccountManagement/>
      </div>
      <div className={styles["right-container"]}></div>
    </section>
  );
};
