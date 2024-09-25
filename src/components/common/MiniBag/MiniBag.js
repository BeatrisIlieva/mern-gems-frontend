import { useEffect, useState, memo } from "react";

import { EmptyMiniBag } from "./EmptyMiniBag/EmptyMiniBag";
import { NonEmptyMiniBag } from "./NonEmptyMiniBag/NonEmptyMiniBag";
import { Popup } from "../../reusable/Popup/Popup";

import { useBagContext } from "../../../contexts/BagContext";

import styles from "./MiniBag.module.css";

export const MiniBag = memo(
  ({ toggleDisplayMiniBagPopup, displayPopup, movePopup }) => {
    const { bagTotalQuantity } = useBagContext();

    const [miniBagIsEmpty, setMiniBagIsEmpty] = useState(false);

    useEffect(() => {
      setMiniBagIsEmpty(bagTotalQuantity === 0);
    }, [bagTotalQuantity]);

    return (
      <Popup
        toggleDisplayPopup={toggleDisplayMiniBagPopup}
        displayPopup={displayPopup}
        overlayVariant={"right"}
        modalVariant={"right"}
        movePopup={movePopup}
      >
        <div className={styles["mini-bag"]}>
          {miniBagIsEmpty ? (
            <EmptyMiniBag popupCloseHandler={toggleDisplayMiniBagPopup} />
          ) : (
            <NonEmptyMiniBag popupCloseHandler={toggleDisplayMiniBagPopup} />
          )}
        </div>
      </Popup>
    );
  }
);
