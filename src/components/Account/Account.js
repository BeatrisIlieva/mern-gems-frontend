import { AccountManagement } from "./AccountManagement/AccountManagement";
import { ShippingAndOrders } from "./ShippingAndOrders/ShippingAndOrders";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "./Account.module.css";

export const Account = () => {
  return (
    <section className={styles["account"]}>
      <div className={styles["left-container"]}>
        <ShippingAndOrders
          largeTitleContent={"Address Book"}
          smallTitleContent={"Add A New Address Book"}
          icon={faPlus}
          titleVariant={"address-book"}
          iconVariant={"add-address-book"}
        />
        <ShippingAndOrders
          largeTitleContent={"Orders History"}
          smallTitleContent={"View Orders History"}
          icon={faClockRotateLeft}
          titleVariant={"address-book"}
          iconVariant={"add-address-book"}
        />
      </div>
      <div className={styles["right-container"]}>
        <AccountManagement />
      </div>
    </section>
  );
};
