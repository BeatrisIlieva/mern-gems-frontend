import { Link } from "react-router-dom";
import { useBagContext } from "../../contexts/BagContext";

import { Popup } from "../Popup/Popup";
import { BagList } from "../BagList/BagList";

import { NormalTitle } from "../NormalTitle/NormalTitle";

import { LargeTitle } from "../LargeTitle/LargeTitle";
import { SmallTitle } from "../SmallTitle/SmallTitle";

import { Button } from "../Button/Button";

import { BagCount } from "../BagCount/BagCount";

import styles from "./MiniBag.module.css";

export const MiniBag = ({ toggleDisplayMiniBagPopup }) => {
  const { totalPrice } = useBagContext();

  return (
    <Popup
      overlayVariant={"overlay-right"}
      modalVariant={"mini-bag"}
      popupCloseHandler={toggleDisplayMiniBagPopup}
    >
      <section className={styles["mini-bag"]}>
        <div className={styles["title"]}>
          <LargeTitle title={"My Bag"} />
          <BagCount />
        </div>
        <BagList variant={"mini-bag"} />
        <div className={styles["total-price-wrapper"]}>
          <NormalTitle title={"Total"} variant={"bolded"} />
          <NormalTitle title={`$ ${totalPrice}`} variant={"bolded"} />
        </div>
        <Link to={"/users/shopping-bag"} className={styles["no-decoration"]}>
          <Button
            title={"View Bag"}
            buttonIsDisabled={false}
            callBackFunction={toggleDisplayMiniBagPopup}
            variant={"pink-button"}
          />
        </Link>
        <Link to={"/checkout"} className={styles["no-decoration"]}>
          <Button
            title={"Continue Checkout"}
            buttonIsDisabled={false}
            callBackFunction={toggleDisplayMiniBagPopup}
            variant={"gray-button"}
          />
        </Link>
      </section>
    </Popup>
  );
};
