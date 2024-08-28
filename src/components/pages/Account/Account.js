import { OrderHistory } from "./OrderHistory/OrderHistory";
import { ShippingDetails } from "./ShippingDetails/ShippingDetails";
import { CardDetails } from "./CardDetails/CardDetails";
import { AccountManagement } from "./AccountManagement/AccountManagement";

import styles from "./Account.module.css";

export const Account = () => {
  return (
    <section id={styles["account"]}>
      <div className={styles["flex-container"]}>
        <OrderHistory />
        <ShippingDetails />
        <CardDetails />
      </div>
      <AccountManagement />
    </section>
  );
};
