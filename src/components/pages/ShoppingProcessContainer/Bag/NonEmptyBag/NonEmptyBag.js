import { Link } from "react-router-dom";

import { ShoppingProcessContainer } from "../../ShoppingProcessContainer";

import { BagList } from "../../../../reusable/BagList/BagList";

import { OrderSummary } from "../../common/OrderSummary/OrderSummary";

import { Button } from "../../../../reusable/Button/Button";

import styles from "./NonEmptyBag.module.css";

import { SectionContainer } from "../../reusable/SectionContainer/SectionContainer";

export const NonEmptyBag = () => {
  return (
    <ShoppingProcessContainer title={"Bag"}>
      <SectionContainer>
        <BagList />
      </SectionContainer>
      <SectionContainer>
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
      </SectionContainer>
    </ShoppingProcessContainer>
  );
};
