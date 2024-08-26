import { OrderHistory } from "./OrderHistory/OrderHistory";
import { ShippingDetails } from "./ShippingDetails/ShippingDetails";
import { CardDetails } from "./CardDetails/CardDetails";
import { AccountManagement } from "./AccountManagement/AccountManagement";

import styles from "./Account.module.css";

export const Account = () => {
  return (
    <section className={styles["account"]}>
      <div className={styles["flex-container"]}>
        <ShippingDetails />
        <CardDetails />
      </div>
      <div className={styles["flex-container"]}>
        <AccountManagement />
        <OrderHistory />
      </div>
    </section>
  );
};
