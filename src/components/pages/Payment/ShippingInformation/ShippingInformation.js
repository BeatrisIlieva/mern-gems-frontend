import { Button } from "../../../reusable/Button/Button";
import { UserShippingDetails } from "./UserShippingDetails/UserShippingDetails";
import { UserLoginDetails } from "./UserLoginDetails/UserLoginDetails";

import styles from "./ShippingInformation.module.css";

export const ShippingInformation = ({ toggleDisplayShippingDetailsPopup }) => {
  return (
    <section className={styles["shipping-information"]}>
      <div className={styles["header-wrapper"]}>
        <h2 className={styles["title"]}>Shipping Information</h2>
        <Button
          title={"Edit"}
          callBackFunction={toggleDisplayShippingDetailsPopup}
          variant={"underlined"}
        />
      </div>
      <UserLoginDetails />
      <UserShippingDetails />
    </section>
  );
};
