import { Link } from "react-router-dom";

import { ShoppingProcessContainer } from "../../reusable/ShoppingProcessContainer/ShoppingProcessContainer";
import { ChildWrapper } from "../../reusable/ChildWrapper/ChildWrapper";
import { BagList } from "../../reusable/BagList/BagList";
import { OrderSummary } from "../../common/OrderSummary/OrderSummary";
import { Button } from "../../reusable/Button/Button";

import styles from "./Bag.module.css";

import { useBagContext } from "../../../contexts/BagContext";

export const Bag = () => {
  const { bagTotalQuantity } = useBagContext();

  return (
    <ShoppingProcessContainer title={"Bag"}>
    <ChildWrapper>
      <BagList />
    </ChildWrapper>
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
  </ShoppingProcessContainer>
  )
};
