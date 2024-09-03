import { Link } from "react-router-dom";

import { OrderSummary } from "../../../../common/OrderSummary/OrderSummary";
import { Button } from "../../../../reusable/Button/Button";

import styles from "./OrderSummaryContent.module.css";

export const OrderSummaryContent = () => {
  return (
    <>
      <OrderSummary />
      <Link to={"/checkout"} className={styles["no-decoration"]}>
        <Button
          title={"Continue Checkout"}
          buttonIsDisabled={false}
          variant={"gray"}
        />
      </Link>
    </>
  );
};
