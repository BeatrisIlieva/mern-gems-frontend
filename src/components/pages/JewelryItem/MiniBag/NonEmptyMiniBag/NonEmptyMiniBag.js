import { Link } from "react-router-dom";

import { BagList } from "../../../../reusable/BagList/BagList";
import { Button } from "../../../../reusable/Button/Button";
import { DualTitleSection } from "../../../../reusable/DualTitleSection/DualTitleSection";
import { Popup } from "../../../../reusable/Popup/Popup";

import { useBagContext } from "../../../../../contexts/BagContext";

import styles from "./NonEmptyMiniBag.module.css";

export const NonEmptyMiniBag = ({ toggleDisplayMiniBagPopup }) => {
  const { totalPrice } = useBagContext();

  return (
    <Popup
      popupCloseHandler={toggleDisplayMiniBagPopup}
      modalVariant={"mini-bag"}
      overlayVariant={"mini-bag"}
      title={"My Bag"}
    >
      <section className={styles["mini-bag"]}>
        <BagList variant={"mini"} />
        <div className={styles["bottom-container"]}>
          <DualTitleSection
            firstTitle={"Total"}
            secondTitle={`$ ${totalPrice}`}
            variant={"bolded"}
          />
          <Link to={"/users/shopping-bag"} className={styles["no-decoration"]}>
            <Button
              title={"View Bag"}
              buttonIsDisabled={false}
              callBackFunction={toggleDisplayMiniBagPopup}
              variant={"pink"}
            />
          </Link>
          <Link to={"/checkout"} className={styles["no-decoration"]}>
            <Button
              title={"Continue Checkout"}
              buttonIsDisabled={false}
              callBackFunction={toggleDisplayMiniBagPopup}
              variant={"gray"}
            />
          </Link>
        </div>
      </section>
    </Popup>
  );
};
