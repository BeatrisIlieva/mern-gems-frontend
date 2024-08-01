import { MediumTitle } from "../../../MediumTitle/MediumTitle";
import { NormalTitle } from "../../../NormalTitle/NormalTitle";

import styles from "./ShippingInformation.module.css";

export const ShippingInformation = ({
  userShippingInformation,
  userLoginInformation,
}) => {
  return (
    <section>
      <div className={styles["top-container"]}>
        <MediumTitle title={"Shipping Information"} />
        <NormalTitle title={userLoginInformation.email} variant={"bolded"} />
      </div>
      <ul role="list">
        <li className={styles["list-item"]}>
          {userShippingInformation.firstName} {userShippingInformation.lastName}
        </li>
        <li className={styles["list-item"]}>
          {userShippingInformation.phoneNumber}
        </li>
        <li className={styles["list-item"]}>
          {userShippingInformation.country}
        </li>
        <li className={styles["list-item"]}>
          {userShippingInformation.city}, {userShippingInformation.zipCode}
        </li>
        <li className={styles["list-item"]}>
          {userShippingInformation.street} St.
        </li>
        {userShippingInformation.apartment && (
          <li className={styles["list-item"]}>
            Apt. {userShippingInformation.apartment}
          </li>
        )}
      </ul>
    </section>
  );
};
