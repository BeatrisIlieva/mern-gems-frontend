import { Link } from "react-router-dom";

import { ShoppingProcessContainer } from "../../ShoppingProcessContainer";

import { BagList } from "../../../BagList/BagList";

import { OrderSummary } from "../../OrderSummary/OrderSummary";

import { Button } from "../../../Button/Button";

import styles from "./NonEmptyBag.module.css";

import { LeftSide } from "../../LeftSide/LeftSide";
import { RightSide } from "../../RightSide/RightSide";

export const NonEmptyBag = () => {
  return (
    <ShoppingProcessContainer title={"Bag"}>
      <LeftSide>
        <BagList />
      </LeftSide>
      <RightSide>
        <OrderSummary />
        <Link to={"/checkout"} className={styles["no-decoration"]}>
          <Button
            title={"Continue Checkout"}
            buttonIsDisabled={false}
            variant={"pink"}
          />
        </Link>
      </RightSide>
    </ShoppingProcessContainer>
  );
};
