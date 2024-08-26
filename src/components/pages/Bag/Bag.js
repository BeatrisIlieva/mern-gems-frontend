import { Link } from "react-router-dom";

import { ShoppingProcessContainer } from "../../reusable/ShoppingProcessContainer/ShoppingProcessContainer";
import { ChildWrapper } from "../../reusable/ChildWrapper/ChildWrapper";
import { BagList } from "../../common/BagList/BagList";
import { OrderSummary } from "../../common/OrderSummary/OrderSummary";
import { Button } from "../../reusable/Button/Button";
import { Collection } from "../../common/Collection/Collection";
import { InfoMessage } from "../../reusable/InfoMessage/InfoMessage";
import { LargeTitle } from "../../reusable/LargeTitle/LargeTitle";
import { DualTitleSection } from "../../reusable/DualTitleSection/DualTitleSection";
import { useBagContext } from "../../../contexts/BagContext";

import { Delivery } from "./Delivery/Delivery";

import styles from "./Bag.module.css";

export const Bag = () => {
  const { bagTotalQuantity } = useBagContext();

  return (
    <>
      {bagTotalQuantity < 1 ? (
        <section className={styles["bag"]}>
          <InfoMessage
            title={"Your Shopping Bag Is Empty"}
            subtitle={"Explore and add something you love."}
          />
          <Collection />
        </section>
      ) : (
        <ShoppingProcessContainer title={"Bag"}>
          <ChildWrapper>
            <>
              <DualTitleSection
                firstTitle={<LargeTitle title={"Bag"} />}
                secondTitle={<Delivery />}
                variant={"bolded"}
              />
              <BagList />
            </>
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
      )}
    </>
  );
};
