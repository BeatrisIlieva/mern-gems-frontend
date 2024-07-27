import { useService } from "../../hooks/useService";
import { useBagContext } from "../../contexts/BagContext";

import { bagServiceFactory } from "../../services/bagService";

import { Popup } from "../Popup/Popup";
import { LargeTitle } from "../LargeTitle/LargeTitle";
import { SmallTitle } from "../SmallTitle/SmallTitle";
import { Icon } from "../Icon/Icon";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

import styles from "./Bag.module.css";

export const Bag = ({ toggleDisplayBagPopup }) => {
  const bagService = useService(bagServiceFactory);

  const { bagQuantity } = useBagContext();

  return (
    <Popup
      isVisible
      variant={"order"}
      popupCloseHandler={toggleDisplayBagPopup}
    >
      <section className={styles["bag"]}>
        <LargeTitle title={"Your Bag"} variant={"large-title"} />
        <div className={styles["wrapper"]}>
          <div className={styles["left-container"]}>
            <div className={styles["delivery"]}>
              <Icon icon={faTruck} variant={"icon"} />
              <SmallTitle title={"Delivery"} />
              <span className={styles["delivery-span"]}>
                {bagQuantity === 1
                  ? `(${bagQuantity} item)`
                  : `(${bagQuantity} items)`}
              </span>
            </div>
          </div>
          <div className={styles["right-container"]}>
            <div className={styles["delivery"]}>
              <SmallTitle title={"Order Summary"} />
            </div>
          </div>
        </div>
      </section>
    </Popup>
  );
};
