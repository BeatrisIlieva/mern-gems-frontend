import { LargeTitle } from "../../../LargeTitle/LargeTitle";

import { NormalTitle } from "../../../NormalTitle/NormalTitle";

import styles from "./ShippingInformation.module.css";

export const ShippingInformation = ({
  userShippingInformation,
  userLoginInformation,
}) => {
  return (
    <section>
      <div className={styles["top-container"]}>
        <LargeTitle title={"Shipping Information"} />
        <NormalTitle title={userLoginInformation.email} variant={"bolded"} />
      </div>
      <ul role="list">
        <li className={styles["list-item"]}>
          <NormalTitle
            title={`${userShippingInformation.firstName} ${userShippingInformation.lastName}`}
            variant={"regular"}
          />
        </li>
        <li className={styles["list-item"]}>
          <NormalTitle
            title={userShippingInformation.phoneNumber}
            variant={"regular"}
          />
        </li>
        <li className={styles["list-item"]}>
          <NormalTitle
            title={userShippingInformation.country}
            variant={"regular"}
          />
        </li>
        <li className={styles["list-item"]}>
          <NormalTitle
            title={`${userShippingInformation.city} ${userShippingInformation.zipCode}`}
            variant={"regular"}
          />
        </li>
        <li className={styles["list-item"]}>
          <NormalTitle
            title={`${userShippingInformation.street} St.`}
            variant={"regular"}
          />
        </li>
        {userShippingInformation.apartment && (
          <li className={styles["list-item"]}>
            <NormalTitle
              title={`Apt. ${userShippingInformation.apartment}`}
              variant={"regular"}
            />
          </li>
        )}
      </ul>
    </section>
  );
};
