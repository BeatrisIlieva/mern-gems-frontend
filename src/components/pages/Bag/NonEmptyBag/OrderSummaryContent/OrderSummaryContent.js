import { Link } from "react-router-dom";

import { ChildWrapper } from "../../../../reusable/ChildWrapper/ChildWrapper";
import { OrderSummary } from "../../../../common/OrderSummary/OrderSummary";
import { Button } from "../../../../reusable/Button/Button";

import styles from "./OrderSummaryContent.module.css";

export const OrderSummaryContent = () => {
  return (
    <ChildWrapper>
      <>
        <OrderSummary />
        <Link to={"/checkout"} className={styles["no-decoration"]}>
          <Button
            title={"Continue Checkout"}
            buttonIsDisabled={false}
            variant={"pink"}
          />
        </Link>
      </>
    </ChildWrapper>
  );
};
