import { OrderHistory } from "./OrderHistory/OrderHistory";
import { ShippingDetails } from "./ShippingDetails/ShippingDetails";
import { CardDetails } from "./CardDetails/CardDetails";
import { AccountManagement } from "./AccountManagement/AccountManagement";

import { useLanguageContext } from "../../../contexts/LanguageContext";

import { HEADING_BY_LANGUAGE } from "./constants/languageRelated";

import styles from "./Account.module.css";

export const Account = () => {
  const { language } = useLanguageContext();

  const heading = HEADING_BY_LANGUAGE[language];

  return (
    <section id={styles["account"]}>
      <p className={styles["heading"]}>{heading}</p>
      <div className={styles["wrapper"]}>
        <div className={styles["flex-container"]}>
          <OrderHistory />
          <ShippingDetails />
          <CardDetails />
        </div>
        <AccountManagement />
      </div>
    </section>
  );
};
