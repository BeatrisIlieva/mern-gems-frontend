import {useState, useEffect} from "react"

import { Link } from "react-router-dom";

import { ShoppingProcessContainer } from "../../reusable/ShoppingProcessContainer/ShoppingProcessContainer";
import { ChildWrapper } from "../../reusable/ChildWrapper/ChildWrapper";
import { BagList } from "../../reusable/BagList/BagList";
import { OrderSummary } from "../../common/OrderSummary/OrderSummary";
import { Button } from "../../reusable/Button/Button";
import { Collection } from "../../common/Collection/Collection";
import { InfoMessage } from "../../reusable/InfoMessage/InfoMessage";

import styles from "./Bag.module.css";

import { useBagContext } from "../../../contexts/BagContext";

export const Bag = () => {
  const { bagTotalQuantity } = useBagContext();

  const [displayInfoMessage, setDisplayInfoMessage] = useState(false);

  return (
    <>
      {bagTotalQuantity < 1 ? (
        <>
          <InfoMessage
            title={"Your Shopping Bag Is Empty"}
            subtitle={"Explore and add something you love."}
          />
          <Collection />
        </>
      ) : (
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
      )}
    </>
  );
};
