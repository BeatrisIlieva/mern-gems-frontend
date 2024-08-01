import { Link } from "react-router-dom";
import { useBagContext } from "../../contexts/BagContext";

import { Popup } from "../Popup/Popup";
import { BagList } from "../BagList/BagList";

import { NormalTitle } from "../NormalTitle/NormalTitle";

import { LargeTitle } from "../LargeTitle/LargeTitle";
import { SmallTitle } from "../SmallTitle/SmallTitle";

import { PinkButton } from "../PinkButton/PinkButton";

import styles from "./MiniBag.module.css";

export const MiniBag = ({ toggleDisplayMiniBagPopup }) => {
  const { totalPrice, bagTotalQuantityIntoState } = useBagContext();

  return (
    <Popup
      overlayVariant={"overlay-right"}
      modalVariant={"mini-bag"}
      popupCloseHandler={toggleDisplayMiniBagPopup}
    >
      <section className={styles["mini-bag"]}>
        <div className={styles["title"]}>
          <LargeTitle title={"My Bag"} />
          <NormalTitle
            title={
              bagTotalQuantityIntoState > 1
                ? `(${bagTotalQuantityIntoState}) items`
                : `(${bagTotalQuantityIntoState}) item`
            }
          />
        </div>
        <BagList variant={"mini-bag"} />
        <div className={styles["total-price-wrapper"]}>
          <NormalTitle title={"Total"} variant={"bolded"} />
          <NormalTitle title={`$ ${totalPrice}`} variant={"bolded"} />
        </div>
        <Link to={"/users/shopping-bag"} className={styles["no-decoration"]}>
          <PinkButton
            title={"View Bag"}
            buttonIsDisabled={false}
            callBackFunction={toggleDisplayMiniBagPopup}
          />
        </Link>
        <Link to={"/checkout"} className={styles["no-decoration"]}>
          <PinkButton
            title={"Continue Checkout"}
            buttonIsDisabled={false}
            callBackFunction={toggleDisplayMiniBagPopup}
          />
        </Link>
      </section>
    </Popup>
  );
};
