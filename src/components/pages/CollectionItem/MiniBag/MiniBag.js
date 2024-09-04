import { useEffect, useState } from "react";

import { Popup } from "../../../common/Popup/Popup";
import { EmptyMiniBag } from "./EmptyMiniBag/EmptyMiniBag";
import { NonEmptyMiniBag } from "./NonEmptyMiniBag/NonEmptyMiniBag";

import { useBagContext } from "../../../../contexts/BagContext";

import styles from "./MiniBag.module.css";

export const MiniBag = ({ toggleDisplayMiniBagPopup }) => {
  const { totalPrice, bagTotalQuantity } = useBagContext();

  const [miniBagIsEmpty, setMiniBagIsEmpty] = useState(false);

  useEffect(() => {
    setMiniBagIsEmpty(bagTotalQuantity === 0 && totalPrice === 0);
  }, [bagTotalQuantity, totalPrice]);

  return (
    <Popup
      popupCloseHandler={toggleDisplayMiniBagPopup}
      modalVariant={"mini-bag"}
      overlayVariant={"mini-bag"}
    >
      <section className={styles["mini-bag"]}>
        {miniBagIsEmpty ? (
          <EmptyMiniBag />
        ) : (
          <NonEmptyMiniBag
            toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup}
          />
        )}
      </section>
    </Popup>
  );
};
