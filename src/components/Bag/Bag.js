import { Link } from "react-router-dom";

import { useBagContext } from "../../contexts/BagContext";

import { Popup } from "../Popup/Popup";
import { BagList } from "../BagList/BagList";

import { OrderSummary } from "../OrderSummary/OrderSummary";

import { LargeTitle } from "../LargeTitle/LargeTitle";

import { PinkButton } from "../PinkButton/PinkButton";

import styles from "./Bag.module.css";

export const Bag = ({ toggleDisplayBagPopup }) => {
  const { bagItems } = useBagContext();

  return (
    <Popup
      overlayVariant={"overlay-right"}
      modalVariant={"bag"}
      closePopupHandler={toggleDisplayBagPopup}
    >
      <section className={styles["bag"]}>
        <LargeTitle title={"My Bag"} />

          <BagList />


        {/* <ul role="list" className={styles["bag-list"]}>
          {bagItems.map((item) => (
            <li key={item.bagId}>
              <BagList {...item} />
            </li>
          ))}
        </ul> */}

        <OrderSummary />
        <Link to={"/checkout"}>
          <PinkButton title={"Continue Checkout"} buttonIsDisabled={false} />
        </Link>
      </section>
    </Popup>
  );
};
